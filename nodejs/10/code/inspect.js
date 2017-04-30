var util = require('util');

var obj = {
    a: 5,
    b: 5
};
obj.self = obj; // ссылка на самого себя, чтоб сложнее было выводить

var obj2 = {
    a: 5,
    b: 5,
    inspect: function () {
        return 'I have my own inspect!'
    }
};

console.log(util.inspect(obj));
console.log(util.inspect(obj2));

// На самом деле `console.log` сама его использует для вывода объектов
console.log('--- via console.log');
console.log(obj);
console.log(obj2);
