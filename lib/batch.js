var encodeKey = require('./encode-key');
var encodeValue = require('./encode-value');

module.exports = function(ops, batchOptions, dbOptions){
  ops.forEach(function(op){
    op.key = encodeKey(op.key, [op, batchOptions, dbOptions]);

    if ('value' in op) {
      op.value = encodeValue(op.value, [op, batchOptions, dbOptions]);
    }

    delete op.keyEncoding;
    delete op.valueEncoding;
    delete op.encoding;
  });
};

