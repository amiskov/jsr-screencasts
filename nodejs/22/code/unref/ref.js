const {Server} = require('http');

const server = new Server((req, res) => {
    // ...
}).listen(3000);

setTimeout(() => {
    // Процесс прекратится только когда завершатся все соединения
    server.close(() => {
        // Лучше, но setInterval и аналоги могут быть запущены из других модулей и хз как их ловить...
        clearInterval(interval)
    });
}, 2500);

const interval = setInterval(() => {
    // Это будет мешать исполнению `server.close()` через 2,5 секунды
    console.log(process.memoryUsage());
}, 1000);