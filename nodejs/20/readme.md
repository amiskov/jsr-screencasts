# Введение в асинхронную разработку
Синхронные операции блокируют возможность выполнять другие задачи пока не будет выполнена текущая. Поэтому в серверной разработке как правило используют асинхронные.

Синхронные операции нормально использовать там, где нужно просто что-то сделать один раз: консольный скрипт, например.

Асинхронные методы не нужно заворачивать в `try...catch`, потому что ошибки передаются в колбэк. И в нем нужно **обязательно** их обработать. Иначе рискуем их пропустить.

Первый аргумент функции-обработчика — всегда ошибка. Если ошибки нет, то он будет `null`. Это общепринятое соглашение в Ноде и все встроенные модули ему следуют.
