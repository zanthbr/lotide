const without= function(source, itemsToRemove) {
  let returnArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    let currentWord = itemsToRemove[i];
    for (let index = 0; index < source.length; index ++) {
      if (currentWord === returnArray[index]) {
        returnArray.splice(index,1);
      }
    }
  }
  return returnArray;
}

module.exports = without;

