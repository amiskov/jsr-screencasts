const {Server} = require('http');

const server = new Server((req, res) => {
    // ...
}).listen(3000);

setTimeout(() => {
    // Процесс прекратится только когда завершатся все соединения
    server.close(() => {
        // Рками завершаем весь процесс (слишком жестоко, отстойный способ)
        process.exit();
    });
}, 2500);

setInterval(() => {
    // Это будет мешать исполнению `server.close()` через 2,5 секунды
    console.log(process.memoryUsage());
}, 1000);