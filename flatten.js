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

const foo = flatten([1, 2, [3, 4], 5, [6]])
console.log(foo);


const foo = function(array) {
  return array.reduce(function(acc, curr) {
    if (Array.isArray(curr)) {
      let vals = []
      for (let index = 0; index < curr.length; index++) {
        vals.push(curr[index]);
      }
      return acc.concat(vals)
    }
    return acc.concat([curr])
  }, [])
}
