#!/usr/bin/env node
'use strict';

let argv = require('yargs')
    .usage('Usage: $0 lcd [--x=depth] [--url=url]')
    .command('depth','specify MAX depth of DOM here')
    .command('url', 'specify the desired url')
    .demand(['depth','url'])
    .help('h')
    .alias('h', 'help')
    .argv;

let url = argv.url;
let depth = argv.depth;

module.exports = url, depth;
// The rest of the code will be here... Maybe.

