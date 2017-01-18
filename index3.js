'use strict';

const request = require('sync-request');
const parse5 = require('parse5');
const depth = process.argv[2];
const url = process.argv[3];

var response;

function getHTML(url) {
    response = request('GET', url);
    return response.getBody('utf8');
}
function parseHTML(response) {
    const document = parse5.parse(response.getBody('utf8'));
    console.log(document.childNodes);
}



getHTML(url);
parseHTML(response);

