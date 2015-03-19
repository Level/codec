
module.exports = function walk(objects, key){
  var value;
  for (var i = objects.length - 1; i >= 0; i--) {
    if (objects[i] && objects[i][key]) value = objects[i][key];
  }
  return value;
};
