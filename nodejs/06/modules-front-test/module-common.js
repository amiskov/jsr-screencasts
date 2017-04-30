module.exports = {
    init: function (name) {
        this.name = 'Vasya';
        this.sayHi = function () {
            return 'Hi, my name is ' + this.name;
        }
    }
};

