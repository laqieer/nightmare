const fs = require('fs');
const path = require('path');
const assert = require('assert');
const Walk = require('@root/walk');
const parser = require('./parser');

const nameFrom = file => path.parse(file.split(' by ')[0].split(' By ')[0].split('(by ')[0].split('(By ')[0]).name.replace(/[\W_]/g, '');

let model = {}
let modules = {}
let template = {}
let reference = {}

const loadTemplate = dir => fs.readdirSync(dir).forEach(file => template[path.parse(file).name] = fs.readFileSync(path.join(dir, file), 'UTF-8').replace(/\r\n/g, '\n'));

const fillTemplate = (templateName, data) => {
    let result = template[templateName];
    result.match(/%\{.+?\}%/g).forEach(variable => result = result.replaceAll(variable, data[variable.slice(2,variable.length - 2)]));
    return result;
};

const loadReference = file => fs.readFileSync(file, 'UTF-8').split(/\r?\n/).filter(line => line.includes(':')).forEach(line => line.split(':')[1].split(',').forEach(entryList => reference[entryList.trim()] = line.split(':')[0].trim()));

const makeEntries = (dir, module) => {
    let result = `export const ${module.options} = [\n`;
    let startNum = 0;
    if (module.entryList != 'NULL') {
        const lines = fs.readFileSync(path.join(dir, module.entryList), 'UTF-8').split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
        startNum = lines.length;
        result += lines.map((line, index) => `  { label: '${line.replaceAll('\'', '\\\'')}', value: ${index} }`).join(',\n') + ',\n';
    }
    if (startNum < module.entryNum) {
        result += [...Array(module.entryNum - startNum).keys()].map(index => `  { label: 'Entry ${index + startNum}', value: ${index + startNum} }`).join(',\n') + ',\n';
    }
    result += '];\n'
    return result;
}

const makeDropbox = (dir, file) => {
    let result = `export const ${nameFrom(file)} = [\n`;
    const lines = fs.readFileSync(path.join(dir, file), 'UTF-8').split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0).slice(1);
    result += lines.map(line => {
        const words = line.split(' ');
        const value = words[0];
        const label = words.length > 1 ? words.slice(1).join(' ').replaceAll('\'', '\\\'') : value;
        return `  { label: '${label}', value: ${value} }`;
    }).join(',\n') + ',\n];\n'
    return result;
}

const byNameWithoutDotFiles = (entities) => {
  // sort by name
  // filter dot files
  return entities
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .filter((ent) => !ent.name.startsWith("."));
};

try {
    assert(process.argv.length >= 4 && process.argv.length <= 5);
    const srcDir = process.argv[2];
    const dstDir = process.argv[3];
    if (process.argv.length >= 5) {
        loadReference(process.argv[4]);
    }
    model.game = path.parse(dstDir).name;
    loadTemplate('../template');
    Walk.create({ sort: byNameWithoutDotFiles })(srcDir, (err, pathname, dirent) => {
        if (err) throw err;
        if (dirent.isDirectory() && dirent.name.startsWith('.')) {
            return Promise.resolve(false);
        }
        if (dirent.isFile() && dirent.name.toLowerCase().endsWith('.nmm')) {
            (nmm => {
                let module = parser.parse(nmm);
                if (module.isNightmare2) {
                    console.warn(`skipped Nightmare2 module: ${module.name} ${nmm}`);
                    return;
                }
                module.name = nameFrom(module.description);
                if(module.name.startsWith(model.game)) module.name = module.name.substring(model.game.length);
                if(module.name in modules) {
                    console.warn(`skipped duplicated module: ${module.name} ${nmm}`);
                    return;
                }
                modules[module.name] = module.description.split(' by ')[0].split(' By ')[0].split('(by ')[0].split('(By ')[0];
                module.dir = path.join(dstDir, module.name);
                fs.mkdirSync(module.dir, { recursive: true });
                module.name = model.game + module.name;
                module.options = module.entryList == 'NULL' ? module.name + 'Entries' : nameFrom(module.entryList);
                if (module.options == module.name) module.options += 'Entries';
                let options = [makeEntries(path.dirname(nmm), module)];
                module.optionLists = new Set();
                module.inputs = module.handlers.map(handler => {
                    handler.description = handler.description.replaceAll('"', '\\"');
                    if(handler.size == 3 && handler.type.startsWith('N')) {
                        handler.size = 4;
                    }
                    switch (handler.type) {
                        case 'TEXT':
                            handler.inputType = `InputText\n        length={${handler.size}}`;
                            break;
                        case 'HEXA':
                            handler.inputType = `InputHexArray\n        length={${handler.size}}`;
                            break;
                        case 'NEHU':
                            handler.inputType = `InputHex\n        type={DataType.U${handler.size * 8}}`;
                            break;
                        case 'NEDS':
                            handler.inputType = `InputDec\n        type={DataType.S${handler.size * 8}}`;
                            break;
                        case 'NEDU':
                            handler.inputType = `InputDec\n        type={DataType.U${handler.size * 8}}`;
                            break;
                        case 'NDHU':
                        case 'NDDU':
                            handler.inputType = `InputDropbox\n        ${handler.type == 'NDHU' ? 'isHex\n        ' : ''}type={DataType.U${handler.size * 8}}\n        ${handler.entryList in reference ? 'reference="' + reference[handler.entryList] + '"\n        ' : ''}options={${nameFrom(handler.entryList)}}`;
                            module.optionLists.add(handler.entryList);
                            break;
                        default:
                            break;
                    }
                    return fillTemplate('handler', handler);
                }).join('');
                if (module.optionLists.size == 0) {
                    options = [...options, `export default ${module.options};\n`];
                }
                module.optionLists.forEach(file => options = [...options, makeDropbox(path.dirname(nmm), file)]);
                module.optionLists = [module.options, ...module.optionLists].map((file, index) => nameFrom(file) + ((index < module.optionLists.size && (index + 1) % 4 == 0) ? ',\n ' : ',')).join(' ');
                module.importInputs = ['InputSelect', ...new Set(module.inputs.match(/Input\w+/g))].map(input => `import ${input} from '../../../Input/${input}';`).join('\n');
                fs.writeFile(path.join(module.dir, 'index.jsx'), fillTemplate('module', module), err => { if (err) throw err });
                fs.writeFile(path.join(module.dir, 'options.js'), options.join('\n'), err => { if (err) throw err });
            })(pathname);
        }
        return Promise.resolve();
    }).then(() => {
        let m = Object.entries(modules).sort((a, b) => a[1].localeCompare(b[1]));
        model.items = m.map((module) => `getItem('${module[1].replaceAll('\'', '\\\'')}', '${model.game}/${module[0]}'),`).join('\n  ');
        fs.writeFile(path.join(dstDir, 'items.jsx'), fillTemplate('items', model), err => { if (err) throw err });
        model.links = m.map((module) => `<Link to={{ pathname: '${module[0]}', state: { buffer } }}>${module[1].replaceAll('\'', '&apos;')}</Link>`).join('\n      ');
        fs.mkdirSync(path.join(dstDir, 'HomePage'), { recursive: true });
        fs.writeFile(path.join(dstDir, 'HomePage/index.jsx'), fillTemplate('homepage', model), err => { if (err) throw err });
        m = [['HomePage', ''], ...m];
        model.imports = m.map((module) => `const ${model.game}${module[0]} = lazy(() => import('./${module[0]}'));`).join('\n');
        model.routes = m.map((module) => `{ path: '${module[1] == '' ? '' : module[0]}', element: <Suspense fallback={loading}><${model.game}${module[0]} /></Suspense> },`).join('\n    ');
        fs.writeFile(path.join(dstDir, 'routes.jsx'), fillTemplate('routes', model), err => { if (err) throw err });
    });
} catch (err) {
    console.error(err);
}
