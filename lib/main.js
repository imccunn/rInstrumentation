'use strict';

var instruments = [
	'flute',
	'piccolo',
	'oboe',
	'clarinet',
	'bass clarinet',
	'horn',
	'trumpet',
	'trombone',
	'tuba',
	'piano',
	'celeste',
	'timpani',
	'harp',
	'violin',
	'viola',
	'cello',
	'double bass',
	'crystal glasses'
];

function selectNinstruments(n) {
	if (!n || n < 1) throw new TypeError("Number of instruments undefined or less than 1.");
	var newInstrumentation = [];
	var oneInstr;
	for (var i = 0; i < n; i++) {
		var rIndex = rInt(0, instruments.length);
		oneInstr = instruments[rIndex];
		newInstrumentation.push(oneInstr);
	}
	return newInstrumentation.map(function(c, i, arr) {
		return c.charAt(0).toUpperCase() + c.slice(1);
	});
}

function rInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

module.exports = selectNinstruments;
