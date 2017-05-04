const fs = require('fs');

// const stream = new fs.ReadStream(__filename, {encoding: 'utf-8'}); // указали кодировку, выведется строковое представление
// const stream = new fs.ReadStream('big.html'); // большой файл, будет несколько событий 'readable'
const stream = new fs.ReadStream('not_exists.html'); // нет файла, будет ошибка

stream.on('readable', () => { // событие файрится, когда порция данных прочитана
    const data = stream.read();  // читаем эту порцию данных
    console.log('--');
    if (data) {
        console.log(data.length, data); // выводим ее
    }
});

stream.on('end', () => { // файл закончился
    console.log('THE END');
});

stream.on('error', (err) => {
    console.log(err);
    if (err.code = 'ENOENT') {
        console.log(`Файл ${err.path} не найден.`);
    } else {
        console.error(err);
    }
});
