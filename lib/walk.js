
module.exports = function walk(objects, keys){
  var value;
  var key;
  var object;
  for (var i = objects.length - 1; i >= 0; i--) {
    object = objects[i];
    for (var j = keys.length - 1; j >= 0; j--) {
      key = keys[j];
      if (object[key]) value = object[key];
    }
  }
  return value;
};
