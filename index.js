'use strict';
const alfy = require('alfy');
const options = require('./options');

const items = alfy
	.inputMatches(options, 'title');
alfy.output(items);
