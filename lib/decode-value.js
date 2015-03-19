var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function decodeValue(value, optionObjects){
  var encoding = walk(optionObjects, 'valueEncoding');
  if (typeof encoding == 'string') encoding = encodings[encoding];
  if (!encoding) return value;
  return encoding.decode(value);
};

