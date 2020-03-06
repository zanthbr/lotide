const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed ✅✅✅:     ' + actual  + ' === ' + expected);
    return true;
  } else {
  console.log('Assertion Failed 🛑🛑🛑:    ' + actual + ' !== ' + expected);
  return false;
  }
}

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

const numbers = [1,2,5,6,8]
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number * 3.14)
const results3 = map(numbers, number => number * 1.15)



console.log(results1);
console.log(results2);
console.log(results3);

assertEqual(eqArrays(results1,[ 'g', 'c', 't', 'm', 't' ]),true);
assertEqual(eqArrays(results2,[ 3.14, 6.28, 15.700000000000001, 18.84, 25.12 ]),true);
