const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    return true;
  }
}


const assertArraysEq = function(actual, expected) {
  if (actual.length === expected.length) {
    for (i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
      return true;
    }
  }
  return false;
}







const letterPositions = function(sentence) {
  const results = {};
  let index = 0
  for (const letter of sentence) {
    if (results[letter]) {
    results[letter].push(index);
    } else {
      results[letter] = [];
      results[letter].push(index);
    }
    index += 1;
  }
  delete results[' '];
  return results;
};


const teststring = 'hello dude';
console.log(letterPositions(teststring));