var fs = require('fs');

// синхронный вариант
// при ошибке выбросит исключение, поэтому заворачиваем в try...catch
// try {
//     var data = fs.readFileSync(__filename);
//     console.log(data);
// } catch (e) {
//     console.error(e);
// }

// асинхронный вариант
fs.readFile('ololo', {encoding: 'utf-8'}, function (err, data) { // __filename — путь к этому файлу
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('Файл не найден');
        }

        console.error(err);
    } else {
        console.log(data.toString());
    }
});

// Проверка файла на существование
fs.stat(__filename, function (err, stats) {
    console.log(stats.isFile());
    console.log(stats);
});