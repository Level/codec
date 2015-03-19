var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function valueAsBuffer(optionObjects){
  var encoding = walk(optionObjects, 'valueEncoding');
  if (typeof encoding == 'string') encoding = encodings[encoding];
  if (!encoding) return false;
  return encoding.buffer;
};
