# Easy sharing platform

This tool makes it easier to post contents to a trello board.

## Utilities: Test Trello API from shell

    // example call:
    node trello-sh.js GET /1/members/me/boards



## Installation

Get a key and a token:
https://trello.com/app-key

Configure it in settings.json

    {
    "key": "<YOUR KEY>",
    "token": "<USER TOKEN>"
    }


# Dependencies

Node wrapper for Trello's HTTP API
https://github.com/adunkman/node-trello
