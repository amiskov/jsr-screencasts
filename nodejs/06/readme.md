# Приёмы работы с модулями
## Мои вопросы
### `require` в Ноде
Нода сделает `require` на этапе исполнения при вызове функции `connect`?

Код у Ильи в скринкасте:

```js
var phrases;

exports.connect = function () {
    phrases = require('./ru');
};
```

Привык, что на фронте CommonJS-синтаксис один фиг сначала будет собран и в этом случае реквайры лучше выносить наверх. Они в любом случае будут сделаны.

## Объект `module`
Объект `module` содерит информацию о данном модуле и заполняется по мере исполнения. Если вывести в консоль, можно увидеть что-то подобное:

```
Module {
    id: '.',
    exports: {},
    parent: null,
    // Родительский модуль
    filename: '/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/06/code/user/index.js',
    loaded: false, // модуль до конца не выполнен
    children: [Module { // модуль ru.json
        // путь к файлу
        id: '/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/06/code/user/ru.json',
        // что экспортим
        exports: [Object],
        parent: [Circular],
        filename: '/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/06/code/user/ru.json',
        loaded: true, // дочерний модуль загружен
        children: [],
        paths: [Object]
    }],
    paths: ['/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/06/code/user/node_modules',
        '/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/06/code/node_modules',
        '/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/06/node_modules',
        '/Users/amiskov/Documents/Trainigs/jsr-screencasts/nodejs/node_modules',
        '/Users/amiskov/Documents/Trainigs/jsr-screencasts/node_modules',
        '/Users/amiskov/Documents/Trainigs/node_modules',
        '/Users/amiskov/Documents/node_modules',
        '/Users/amiskov/node_modules',
        '/Users/node_modules',
        '/node_modules'
    ]
}
```

Свойства `parent` и `exports` на практике используются чаще всего.

## `module.parent`: запуск и подключение модля
Модуль может использоваться сам по себе (`$ node module-name.js`) или включаться в другие модули. Чтобы разделить эти два состояния используют проверку на наличие `module.parent` (есть родительский модуль, когда модуль зареквайрен).

См. `server.js` и `app.js`.

## `module.exports`
В модуле `exports` и `this` — это ссылки на `module.exports`:

```js
console.log(module.exports == exports && module.exports == this); // true
```

И если мы хотим экспортировать наружу четко функцию или объект, то нужно писать так:

```js
function User(name) {
    // ...
}
module.exports = User; // записали в свойство объекта
// exports = User; // Не выйдет, мы тупо перезапишем переменную
```

Так: `exports = User` не пойдет. `exports` — это просто переменная, ссылка на свойство объекта `module.exports`. И так мы ее просто перезаписываем.

## Как работает подключение модулей
### Кеширование модулей
Если модуль подключен в нескольких файлах, то он загрузится один раз и дальше будет браться из кэша. Будет использован везде один и тот же объект.

Можно подключить модуль в одном файле, инициализировать его, а в других файлах его можно просто подключать без инициализации (получить ссылку на объект).

Проверил на фронтовой сборке через Webpack, там так же. См. `./modules-front-test/`.

### Порядок поиска модулей
Если модуль часто подключается в разных других модулях, то заебисто все время писать путь:

```js
// module1.js
var db = require('./db');

// module2.js
var db = require('../db');

// module3.js
var db = require('../../../db');
```

Можно сделать просто, чтоб везде было `require('db')` — сделать модуль глобальным. Для этого его можно поместить в `node_modules` или использовать переменную `NODE_PATH`.

[Алгоритм загрузки модулей](https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_all_together) в Ноде из документации.

Если коротко, то Нода ищет так:
1. Встроенные модули
2. Модули по пути (если указан `./`, `../` и пр.)
3. Модули в папке `node_modules` верх-верх до начала файловой системы
4. А потом проверяет [глобальную переменную `NODE_PATH`](https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_loading_from_the_global_folders).

### NODE_PATH
В этой переменной можно указать несколько путей, по которым Нода будет искать модули.

Для примера из папки `./code` получим: `NODE_PATH=. node app.js`.

Есть еще [несколько директорий](https://nodejs.org/dist/latest-v7.x/docs/api/modules.html#modules_loading_from_the_global_folders), где Нода ищет, но они не нужны. Просто остались по историческим причинам.

### Модуль-фабрика, передача параметров в модуль
```js
var log = require('logger')(module);
```

Передали объект текущего модуля в функцию (модуль), которую реквайрим. А этот модуль вернет функцию, которая использует переданный модуль (в данном случае выводит его имя).
