var encodings = require('./encodings');
var walk = require('./walk');

module.exports = function valueAsBuffer(optionObjects){
  var encoding = walk(optionObjects, ['valueEncoding', 'encoding']) || 'utf8';
  if (typeof encoding == 'string') encoding = encodings[encoding];
  return encoding.buffer;
};
