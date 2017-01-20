'use strict';

const request = require('sync-request');
const dom = require('html-dom-parser');
const depth = process.argv[2];
const url = process.argv[3];

function getDOM(url) {
    const response = request('GET', url);
    // console.log(dom(response.getBody('utf8')));
    return dom(response.getBody('utf8'));
}

function getHTML(arr) {
    // console.log(arr[1]);
    return arr[1];
}






