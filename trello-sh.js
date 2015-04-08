'use strict';

var trello_request = require('./lib/trello-request');

var method = process.argv[2];
var path = process.argv[3];

trello_request(method, path, function (err, data) {
    if (err) throw err;
    console.log(data);
});
