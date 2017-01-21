#!/usr/bin/env node
'use strict';

const request = require('sync-request');
const dom = require('html-dom-parser');
const depth = require('./args').depth;
const url = require('./args').url;
const assert = require('assert');

function getDOM(url) {
    const response = request('GET', url);
    return dom(response.getBody('utf8'));
}

function getHTML(arr) {
    return arr[1]; //TODO: sometimes it works wrong, with vk.com, for example
}

function getDepth() {
    const DOM = getDOM(url);
    const html = getHTML(DOM);

    let depthCount = 0;

    function count(current, depth) {
        let childs = current.children;

        if (childs) {
            childs.forEach(function (elem){
                count(elem, depth + 1);
            });
        }

        if (depthCount < depth) {
            depthCount = depth;
        }
    }

    count(html, 0);
    console.log('actual depth ' + depthCount);
    checkDepth(depthCount);
}

getDepth();

function checkDepth (depthCount) {
    assert((depthCount <= depth), 'DOM depth is bigger than expected');
}

