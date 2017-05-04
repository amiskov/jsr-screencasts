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
    file.pipe(res);
    // file.pipe(process.stdout);

    file.on('error', (err) => {
        res.statusCode = 500;
        res.end('Server error.');
        console.error(err);
    });

    res.on('close', () => { // если соединение оборвано
        console.log('Disconnected!');
        file.destroy(); // ...вырубаем входящий поток из файла
    });

    // Тестирование curl 1k
    file.on('open', () => {
        console.log('open');
    }).on('close', () => {
        console.log('close');
    })
}