'use strict';

function Instrument() {
  this.name;
  this.transposition;
  this.family;
  this.range = new PitchRange();
}

function PitchRange() {
  this.proLow;
  this.proHigh;
  this.commonLow;
  this.commonHigh;
}

function Pitch(pc, oct) {
  this.pClass = pc || undefined;
  this.octave = oct || undefined;
}

module.exports = Instrument;
