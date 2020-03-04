const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed ✅✅✅:     ' + actual + ' === ' + expected);
    return true;
  } else {
    console.log('Assertion Failed 🛑🛑🛑:    ' + actual + ' !== ' + expected);
    return false;
  }
}

const eqArrays = function (array1, array2) {
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

const middle = function (array) {
  let returnArray = []
  const mid = Math.floor((array.length)/ 2 );
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    returnArray.push(array[mid - 1], array[mid] );
    return returnArray;
    }
  returnArray.push(array[mid]);
return returnArray;
}

console.log(eqArrays(middle([1,2,3,4,5]),[3]));
console.log(eqArrays(middle([1,2,3,4,5,6]),[3,4]));

