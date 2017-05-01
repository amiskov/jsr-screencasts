var http = require('http');
var util = require('util');
var server = new http.Server();

server.listen(1337, '127.0.0.1');

var counter = 0;
server.on('request', function (req, res) {
    res.end('Hello world! ' + ++counter)
});

var emit = server.emit;
server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
};

// for (var prop in server) {
//     console.log(prop);
// }
//
// console.log(server.listeners('request'));
// console.log(server.listenerCount('request'));
// console.log(server.eventNames());

