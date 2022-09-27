const parser = require('./parser');

parser.parse(process.argv[2], (err, data) => {
    if (err != null) {
        console.error(err);
        return;
    }
    console.log(data);
});
