var util = require('util');

// Parent
function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function () {
    console.log('Ходит ' + this.name);
};

// Child
function Rabbit(name) {
    this.name = name;
}
util.inherits(Rabbit, Animal); // Наследуем от Animal
Rabbit.prototype.jump = function () {
    console.log('Прыгает ' + this.name);
};

// Использование
var rabbit = new Rabbit('Кроль');
rabbit.jump();
rabbit.walk(); // Унаследовал
