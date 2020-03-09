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

module.exports = middle;

