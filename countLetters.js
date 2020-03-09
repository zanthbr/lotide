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


module.exports = countLetters;
