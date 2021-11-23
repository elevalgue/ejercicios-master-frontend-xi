console.log('************** PRACTICE *********************');
console.log('08 - Includes');

function includes(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
      
    } else {
      return false; 
    }
  }
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false