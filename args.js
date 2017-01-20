'use strict';

const argv = require('yargs')
    .usage('Usage: $0 lcd [--x=depth] [--url=url]')
    .command('depth','specify MAX depth of DOM here')
    .command('url', 'specify the desired url')
    .demand(['depth','url'])
    .help('h')
    .alias('h', 'help')
    .argv;

const depth = argv.depth;
let url = argv.url;

if (url.indexOf('http') !==0) {
    url = 'http://' + url;
}

module.exports = {
    depth,
    url
};

