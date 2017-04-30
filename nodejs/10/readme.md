# Модуль util и наследование
В исходниках ноды этот модуль написан на JS и лежит в `lib/util.js`.

## `util.inspect`
См. `./code/inspect.js`.

`util.inspect(object)` — красиво показать объект.

Причем, если в объекте будет своя функция `inspect`, то вызовется именно она.

`console.log` использует `util.inspect` внутри себя.

Зачем `util.inspect`, когда есть `console.log`? А затем, что иногда нужно выводить не в консоль, а, например, логировать в файл.

## `util.format`
См. `./code/format.js`.

Позволяет удобно выводить строки, числа и JSON. Автоматически происходит конвертация. Он так же неявно используется в `console.log`.

## `util.inherits`
См. `./code/inherits.js`

Реализует наследование конструкторов:

```js
util.inherits(ChildCtor, ParentCtor)
```
 
 
Под капотом в `7.9`:

```js
exports.inherits = function(ctor, superCtor) {
    // проверки...
    ctor.super_ = superCtor;
    Object.setPrototypeOf(ctor.prototype, superCtor.prototype); // Из ES6, наследование объектов (тут прототипов)
};
````


