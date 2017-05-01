// 127.0.0.1/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function (req, res) {
    console.log(req.headers);

    var urlParsed = url.parse(req.url, true); // второй аргумент `true` говорит, что query надо разобрать в объект

    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        // res.setHeader('Cache-control', 'no-cache');
        res.writeHead(200, "OK", {'Cache-control': 'no-cache'});
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(1337, '127.0.0.1');
