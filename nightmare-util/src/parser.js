const fs = require('fs');
const path = require('path');
const assert = require('assert');

exports.parse = (filename, callback) => {
    try {
        assert(filename.toLowerCase().endsWith('.nmm'));
        fs.readFile(filename, 'UTF-8', (err, data) => {
            if (err != null) {
                throw err;
            }
            data = data.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0 && !line.startsWith('#'));
            let module = {};
            module.filename = path.basename(filename);
            module.version = data[0] * 1;
            module.description = data[1];
            module.address = data[2];
            module.entryNum = data[3] * 1;
            module.entrySize = data[4] * 1;
            module.entryList = data[5];
            module.tbl = data[6];
            module.inputs = [];
            for (let i = 0; 7 + 5 * i < data.length; i++) {
                module.inputs[i] = {
                    description: data[7 + 5 * i],
                    offset: data[8 + 5 * i] * 1,
                    size: data[9 + 5 * i] * 1,
                    type: data[10 + 5 * i],
                    entryList: data[11 + 5 * i],
                }
            }
            return callback(null, module);
        });
    } catch (err) {
        return callback(err, {});
    }
}
