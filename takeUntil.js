const takeUntil = function(array, callback) {
  const returnArray = [];
  for (element of array) {
    if (callback(element)) {
      return returnArray;
    } else {
      returnArray.push(element);
    }
  }
  return returnArray;
}

module.exports = takeUntil;