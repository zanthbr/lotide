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


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`Assertion Passed! ✅✅✅ ${inspect(object1)} === ${inspect(object2)}`)
  }
  else {
    console.log(`Assertion Failed! 🛑🛑🛑 ${inspect(object1)} !== ${inspect(object2)}`)
  }
};