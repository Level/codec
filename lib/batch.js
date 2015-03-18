var encodeKey = require('./encode-key');
var encodeValue = require('./encode-value');

module.exports = function(ops, optionObjects){
  return ops.map(function(_op){
    var localOptionObjects = [_op].concat(optionObjects);

    var op = {
      type: _op.type,
      key: encodeKey(_op.key, localOptionObjects)
    };

    if ('value' in _op) {
      op.value = encodeValue(_op.value, localOptionObjects);
    }

    return op;
  });
};

