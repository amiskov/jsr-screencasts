const {Server} = require('http');

const server = new Server((req, res) => {
    // Нужно сделать асинхронную операцию
    setTimeout(() => {
        // Не явно, когда выполнится код (есть задержка 4—10 мс)
        // например при обработке запроса: requestHandler(req) — нет уверенности,
        // что именно текущий req попадет в такой обработчик
    }, 0);

    // Нужно так:
    process.nextTick(() => {
        req.on('readable', () => {
            // должен сработать на ближайших данных
        });

        // вложенный process.nextTick будут запущены тут же, не вылезая во внешний код
    });

    var part = 0;
    setImmediate(function run() {
        heavyCalc(part++); // какие-то тяжелые вычисления, которые надо разбить
        if (notFinished) { // закончили вычисления или нет?
            setImmediate(run); // рекурсивный вызов будет помещен в СЛУДУЮЩУЮ итерацию событийного цикла
        }
    })
}).listen(1337);
