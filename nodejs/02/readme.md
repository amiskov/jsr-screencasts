# Что такое Node.JS? Почему Node.JS?
Созадл Ryan Dahl в 2009. JS на любом устрйостве.

Были и другие попытки сделать серверный/платформенный JS.

NodeJS = V8 (за JavaScript) + I/O (libUV) + библиотеки.

V8 круто работает. Альтернативы: Rhino, JSCore, ... Но они уступают.

## Почему NodeJS
* Везде JS.
* Реиспользование кода (немного, но есть).
* Решает задачи под веб хорошо, проектировался изначально для этого.
* Лучше всего проявляет себя там, где нужно поддерживать много соединений и задач одновременно: чат, игра и пр. При этом задачи не вычислительные. Вычислительные задачи не сильно хорошо проработаны.
* Легко сделать рабочий прототип. Если архитектура нормальная, то и расширяться оно будет дальше хорошо.
* NPM и много готовых пакетов.
* Хорошее сообщество. Много готового.