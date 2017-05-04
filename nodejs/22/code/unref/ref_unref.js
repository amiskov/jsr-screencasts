const {Server} = require('http');

const server = new Server((req, res) => {
    // ...
}).listen(3000);

setTimeout(() => {
    // Процесс прекратится только когда завершатся все соединения
    server.close();
}, 2500);

const interval = setInterval(() => {
    // Это будет мешать исполнению `server.close()` через 2,5 секунды
    console.log(process.memoryUsage());
}, 1000);
for (let prop in interval) {
    console.log(prop);
}
interval.unref();