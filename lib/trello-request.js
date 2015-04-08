'use strict';

var Trello = require('node-trello');
var fs = require('fs');

try {
    var settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'));

    if (!settings.key) {
        throw new Error('key is missing');
    }
}
catch (e) {
    console.error('Error with settings.json', e);
    return;
}

var t = new Trello(settings.key, settings.token);

module.exports = function () {
    return t.request.apply(t, arguments);
}