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

module.exports = assertArraysEq;

