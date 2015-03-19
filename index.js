var encodeKey = exports.encodeKey = require('./lib/encode-key');
var encodeValue = exports.encodeValue = require('./lib/encode-value');
var encodeBatch = exports.encodeBatch = require('./lib/batch');
var encodings = exports.encodings = require('./lib/encodings');
var decodeKey = exports.decodeKey = require('./lib/decode-key');
var decodeValue = exports.decodeValue = require('./lib/decode-value');
var keyAsBuffer = exports.keyAsBuffer = require('./lib/key-as-buffer');
var valueAsBuffer = exports.valueAsBuffer = require('./lib/value-as-buffer');

exports.Codec = Codec;

function Codec(options){
  this.options = options;
}

Codec.prototype.encodeKey = function(key, options){
  return encodeKey(key, [options, this.options]);
};

Codec.prototype.encodeValue = function(value, options){
  return encodeValue(value, [options, this.options]);
};

Codec.prototype.encodeBatch = function(ops, options){
  return encodeBatch(ops, [options, this.options]);
};

Codec.prototype.encodings = encodings;

Codec.prototype.decodeKey = function(key, options){
  return decodeKey(key, [options, this.options]);
};

Codec.prototype.decodeValue = function(value, options){
  return decodeValue(value, [options, this.options]);
};

Codec.prototype.keyAsBuffer = function(options){
  return keyAsBuffer([options, this.options]);
};

Codec.prototype.valueAsBuffer = function(options){
  return valueAsBuffer([options, this.options]);
};

