const {Server} = require('http'),
      fs       = require('fs');

new Server((req, res) => {
    // res instanceof http.ServerResponse < stream.Writable

    if (req.url === '/big.html') {
        fs.readFile('big.html', (err, content) => {
            if (err) {
                res.statusCode = 500;
                res.end('Server error.');
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(content)
            }
        });
    } else {
        res.end('Only http://localhost:3000/big.html works.');
    }
}).listen(3000);

console.log('Listening localhost:3000...');