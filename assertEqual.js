  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('Assertion Passed ✅✅✅:     ' + actual  + ' === ' + expected);
      return true;
    } else {
    console.log('Assertion Failed 🛑🛑🛑:    ' + actual + ' !== ' + expected);
    return false;
    }
  }
assertEqual('pog','champ');
assertEqual(1,1);
assertEqual(1,89);
assertEqual('pog', 'pog');