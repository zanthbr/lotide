const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed ✅✅✅:     ' + actual  + ' === ' + expected);
    return true;
  } else {
  console.log('Assertion Failed 🛑🛑🛑:    ' + actual + ' !== ' + expected);
  return false;
  }
}

const countLetters = function(string) {
  const newstring = string.replace(/ /g, '').toUpperCase();
  const countedLetters = {};
  for (letter of newstring) {
    if (countedLetters[letter]){
      countedLetters[letter] += 1;
    } else {
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
}

console.log(countLetters('Playing with kittens'))