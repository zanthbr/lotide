const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i ++) {
    if (Array.isArray(array[i])) {
      for (let index = 0; index < array[i].length; i++) {
        flattenedArray.push(array[i][index]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}

module.exports = flatten;
