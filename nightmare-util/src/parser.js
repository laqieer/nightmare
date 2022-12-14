const fs = require('fs');
const path = require('path');
const assert = require('assert');

exports.parse = file => {
    assert(file.toLowerCase().endsWith('.nmm'));
    let data = fs.readFileSync(file, 'UTF-8');
    let module = {};
    module.filename = path.basename(file);
    if (data.startsWith('#0x')) module.version = 'Nightmare2';
    data = data.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0 && !line.startsWith('#') && !line.startsWith('//'));
    if (module.version != 'Nightmare2') module.version = data[0];
    module.description = data[1];
    module.address = data[2];
    module.entryNum = data[3] * 1;
    module.entrySize = data[4] * 1;
    module.entryList = data[5];
    module.tbl = data[6];
    module.handlers = [];
    for (let i = 0; 7 + 5 * i < data.length; i++) {
        module.handlers[i] = {
            description: data[7 + 5 * i],
            offset: data[8 + 5 * i] * 1,
            size: data[9 + 5 * i] * 1,
            type: data[10 + 5 * i],
            entryList: data[11 + 5 * i],
        }
    }
    return module;
}
