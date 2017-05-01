# Отладка скриптов под Node.JS
## Встроенный отладчик `node debug`
Самый простой отладчик, используется когда нужно что-то быстро посмотреть или нет ничего другого. Запускается так: `node debug server.js`.

Даже если в коде нет `debugger;`, то при запуске скрипт будет в состоянии паузы. Продолжить можно командой `cont`.

При остановке скрипта можно запустить `repl` и смотреть переменные.

## Отладчик в Хроме, `node-inspector`
При запуске Ноды с флагом `--debug` она начинает слушать порт `5858`. К этому порту может подключиться другмя программа и давать команды для Ноды, относящиеся к отладке.

В V8 есть свой [протокол дебаггера](https://github.com/v8/v8/wiki/Debugging-over-the-V8-Inspector-API)

Порядок действий:
1. Запускаем наш скрипт с флагом `--debug`: `node debug server.js`.
2. Запускаем `node-inspector`.
3. Дебажим в браузере.

Можно пользоваться консолью: смотреть переменные, делать запросы и пр.

Для такого дебага устанавливается несколько соединений: Node->`node-inspector`->браузерный движок. Иогда что-то может разорваться. Обычно после обновления отладчика в браузере/перезапуска инспектора/перезапуска всего это можно восстановить и продолжать работу.

Флаг `--debug-brk` сразу вводит скрипт в режим останова. Так можно отлаживать скрипты, которые закрываются сразу после исполнения.

## Отладка в IDE
Если сконфигурировать WebStorm (см. [`17`](../17)) и нажать кнопку с жуком (Отладка), то он запустить ноду с флагами дебага и сам подключится к нуному порту обеспечив интерфейс. Единственное, нужно чтобы не `supervosor` использовался, а сама Нода.