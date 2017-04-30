var EventEmitter = require('events').EventEmitter;
var server = new EventEmitter();

server.emit('ololo'); // обработчика нет, ничего не сделается

server.on('error', function (err) {
    console.log(err.message);
    // Хоть какой-то обработчик, все нормально, ничего не упадет.
    // Если обработчика не будет, то сгенерится исключение и упадет процесс
});

server.emit('error', new Error('Что-то сломалось'));
