var util = require('util');

var phrases = {
    "Hello": "Привет",
    "world": "мир"
};

//

function PhraseError(message) {
    this.message = message; // message нужно поставить вручную
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError('Нет такой фразы: ' + name); // HTTP 500 + уведомление
    }

    return phrases[name];
}

function makePage(url) {
    if (url !== 'index.html') {
        throw new HttpError(404, "Нет такой страницы"); // HTTP 404
    }

    // return util.format("%s %s!", getPhrase("Hello"), getPhrase("world")); // без ошибок
    return util.format("%s %s!", getPhrase("Hello"), getPhrase("orld")); // с ошибкой 500
}

try {
    var page = makePage('index.html'); // без ошибок
    // var page = makePage('index'); // 404
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else { // будет действовать для всех ошибок, в том числе для PhraseError
        console.error('Ошибка %s\n сообщение: %s\n стек %s', e.name, e.messge, e.stack);
    }
}
