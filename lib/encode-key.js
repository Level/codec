var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function encodeKey(key, optionObjects){
  var encoding = walk(optionObjects, 'keyEncoding');
  if (typeof encoding == 'string') encoding = encodings[encoding];
  if (!encoding) return key;
  return encoding.encode(key);
};
