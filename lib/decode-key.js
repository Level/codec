var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function decodeKey(key, optionObjects){
  var encoding = walk(optionObjects, 'keyEncoding') || 'utf8';
  if (typeof encoding == 'string') encoding = encodings[encoding];
  return encoding.decode(key);
};
