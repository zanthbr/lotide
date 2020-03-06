const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed ✅✅✅:     ' + actual  + ' === ' + expected);
    return true;
  } else {
  console.log('Assertion Failed 🛑🛑🛑:    ' + actual + ' !== ' + expected);
  return false;
  }
};

const eqObjects = function(object1, object2) {
  const keyarray1 = Object.keys(object1);
  const keyarray2 = Object.keys(object2);
  if (keyarray1.length !== keyarray2.length) {
    return false;
  }
  for (key of keyarray1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && object1[key].length === object2[key].length) {
      for (let i = 0; i < object1[key].length; i++){
        if (object1[key][i] !== object2[key][i]){
          
          return false;
        }
      }
    }
   else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
};

const ab = { a: [0,1], b: "2" };
const ba = { b: "2", a: [0,1], c: 0 };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false