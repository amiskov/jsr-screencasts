const fs = require('fs');

fs.open(__filename, 'r', (err, file) => {
    console.log('IO operation');
});

setImmediate(() => {
    console.log('Immediate');
});

process.nextTick(() => { // будет сначала
    console.log('nextTick');
});
