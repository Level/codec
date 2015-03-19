var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function keyAsBuffer(optionObjects){
  var encoding = walk(optionObjects, 'keyEncoding');
  if (typeof encoding == 'string') encoding = encodings[encoding];
  if (!encoding) return false;
  return encoding.buffer;
};
