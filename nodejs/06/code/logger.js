/*
 log(msg) — выводит сообщение и название модуля, который его показывает.
 var logger = require('logger')(module);
 */

module.exports = function (module) {
    return function () {
        var args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    }
};

