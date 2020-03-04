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

const without= function(source, itemsToRemove) {
  let returnArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    let currentWord = itemsToRemove[i];
    for (let index = 0; index < source.length; index ++) {
      if (currentWord === returnArray[index]) {
        returnArray.splice(index,1);
      }
    }
  }
  return returnArray;
}


console.log(assertArraysEq(without(["1", "2", "3"], [1, 2, "3"]))['1','2']);

