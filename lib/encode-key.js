var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function encodeKey(key, optionObjects){
  var encoding = walk(optionObjects, ['keyEncoding', 'encoding']) || 'utf8';
  if (typeof encoding == 'string') encoding = encodings[encoding];
  return encoding.encode(key);
};
