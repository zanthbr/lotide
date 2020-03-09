const findKeyByValue = function(object, value) {
  const keyArray = Object.keys(object)
  for (key of keyArray) {
    if (object[key] === value) {
      return key;
    }
  }
}

module.exports = findKeyByValue;
