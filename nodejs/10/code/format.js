var util = require('util');
console.log(util.format('My %s %d %j', 'ololo', 1985, {test: 3}));

// Он же работает в `console.log`
console.log('--- via console.log');
console.log('My %s %d %j', 'ololo', 1985, {test: 3});
