# Модуль console
Использует `util.inspect` и `util.format`.

`console` — глобальная переменная. Не нужно ничего реквайрить.

Постоянно используемых методов два:
* `console.log('Log')` или аналог `console.info('Log')` — выводит в стандартный поток вывода.
* `console.error('Error')` или аналог `console.warn('Error')` — выводит в поток ошибок.

У программ есть 2 потока вывода: стандартный и ошибок. Вот `console` это и реализует. Мы можем отличать обычные сообщения от ошибок.

Можно, например, выводить в разыне файлы: `node console.js 1>ok.log 2>err.log`

Третий:
* `console.trace` — выводит stack trace в поток ошибок. Иногда бывает полезно вывести.

В Ноде нет `console.debug`, который присутствует в браузерах.
