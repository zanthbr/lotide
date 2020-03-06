const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed ✅✅✅:     ' + actual  + ' === ' + expected);
    return true;
  } else {
  console.log('Assertion Failed 🛑🛑🛑:    ' + actual + ' !== ' + expected);
  return false;
  }
}

const findKey = function (object, callback) {
  for (let key in object) {
    console.log(object[key])
    if (callback(object[key])) {
      return key
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

console.log(findKey({
}, x => x.stars === 2));