'use strict';

var nInstruments = require('./lib/main');

var args = process.argv;

var n = args[2];

var log = {
	newInst: 'Your new instrumentation: '
};
console.log(log.newInst + nInstruments(n).join(', '));