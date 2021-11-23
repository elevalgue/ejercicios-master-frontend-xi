console.log("************** PRACTICE *********************");
console.log("12 - Subsets");

function subsets(word) {
  const reversedWord = []; 
  for (let index = 1; index < word.length; index++) {
    reversedWord.push(word.slice(index, word.length)); 
  }

  return reversedWord; 
}


// function subsets(word) {
//   return word.split("")
//     .map(character => character)
//     .join(""); 
// }

console.log(subsets('message')); // ["essage", "ssage", "sage", "age", "ge", "e"]
