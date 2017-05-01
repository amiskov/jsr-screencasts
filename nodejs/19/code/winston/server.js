var http = require('http');
var log = require('./log')(module); // передаем идентификатор, чтоб вывод из этого файла отличался

var server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);
log.info('Server is running...');
