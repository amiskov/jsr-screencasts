var http = require('http');
var debug = require('debug')('server'); // передаем идентификатор, чтоб вывод из этого файла отличался

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);
debug('Server is running...');
