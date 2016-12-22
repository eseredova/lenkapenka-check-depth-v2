#!/usr/bin/env node
'use strict';

var argv = require('yargs')
    .usage('Usage: $0 lcd [--x=depth] [--url=url]')
    .command('depth','specify MAX depth of DOM here')
    .command('url', 'specify the desired url')
    .demand(['depth','url'])
    .help('h')
    .alias('h', 'help')
    .argv;

// console.log('(%d,%d)', argv.depth, argv.url);

// The rest of the code will be here... Maybe.

