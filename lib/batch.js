var encodeKey = require('./encode-key');
var encodeValue = require('./encode-value');
var keyAsBuffer = require('./key-as-buffer');
var valueAsBuffer = require('./value-as-buffer');

module.exports = function(ops, optionObjects){
  return ops.map(function(_op){
    var localOptionObjects = [_op].concat(optionObjects);

    var op = {
      type: _op.type,
      key: encodeKey(_op.key, localOptionObjects)
    };
    if (keyAsBuffer(localOptionObjects)) op.keyEncoding = 'binary';
    if (_op.prefix) op.prefix = _op.prefix;

    if ('value' in _op) {
      op.value = encodeValue(_op.value, localOptionObjects);
      if (valueAsBuffer(localOptionObjects)) op.valueEncoding = 'binary';
    }

    return op;
  });
};

