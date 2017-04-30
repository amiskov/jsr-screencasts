var User = require('./user');

var vasya = new User.User('Vasya');
var petya = new User.User('Petya');

vasya.hello(petya);
