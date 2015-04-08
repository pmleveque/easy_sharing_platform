'use strict';

var trello_request = require('./lib/trello-request');

trello_request('GET', '1/members/me', function (err, data) {
    if (err) throw err;
    console.log(data);
});
