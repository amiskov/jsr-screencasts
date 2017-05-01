var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var info;

    if (req.url === '/') {
        // Синхронный запрос. Пока его не обработает не будет заниматься остальными
        // info = fs.readFileSync('index.html');
        // res.end(info);

        // Асинхронный запрос, остальные запросы ждать не будут
        fs.readFile('index.html', function (err, info) {
            // Если ошибка, то придет только err с информацией о ней. info не будет
            // Поэтому нужно обязательно обработать err
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('На сервере произошла ошибка.');
                return;
            }

            // Если ошибки не будет, то err === null, а в info — данные
            res.end(info);
        });
    } else if (req.url === '/now') {
        req.end(new Date().toString());
    }
}).listen(3000);