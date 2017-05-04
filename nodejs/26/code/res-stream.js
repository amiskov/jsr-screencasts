const {Server} = require('http'),
      fs       = require('fs');

new Server((req, res) => {
    // res instanceof http.ServerResponse < stream.Writable

    if (req.url === '/big.html') {
        const file = new fs.ReadStream('big.html');
        sendFile(file, res);
    } else {
        res.end('Only http://localhost:3000/big.html works.');
    }
}).listen(3000);

console.log('Listening localhost:3000...');

function sendFile(file, res) {
    file.on('readable', write);

    function write() {
        // По-простому:
        // const fileContent = file.read();
        // res.write(fileContent);

        // Правильнее так:
        const fileContent = file.read();

        if (fileContent && !res.write(fileContent)) {
            file.removeListener('readable', write);

            res.once('drain', () => {
                file.on('readable', write);
                write();
            })
        }
    }

    file.on('end', () => {
        res.end();
    });
}