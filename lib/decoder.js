var EncodingError = require('level-errors').EncodingError;
var Transform = require('readable-stream').Transform;
var inherits = require('util').inherits;

module.exports = Decoder;
inherits(Decoder, Transform);

function Decoder(codec, opts){
  Transform.call(this, { objectMode: true });

  if (opts.keys && opts.values) {
    this._decode = function(key, value){
      return {
        key: codec.decodeKey(key, opts),
        value: codec.decodeValue(value, opts)
      };
    };
  } else if (opts.keys) {
    this._decode = function(key) {
      return codec.decodeKey(key, opts);
    }; 
  } else if (opts.values) {
    this._decode = function(_, value){
      return codec.decodeValue(value, opts);
    }
  } else {
    this._decode = function(){};
  }
}

Decoder.prototype._transform = function(kv, _, done){
  try {
    var value = this._decode(kv.key, kv.value);
  } catch (err) {
    return done(new EncodingError(err));
  }
  done(null, value);
};

