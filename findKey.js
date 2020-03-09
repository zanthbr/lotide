const findKey = function (object, callback) {
  for (let key in object) {
    console.log(object[key])
    if (callback(object[key])) {
      return key
    }
  }
}

module.exports = findKey;
