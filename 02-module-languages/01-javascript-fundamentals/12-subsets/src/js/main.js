console.log("************** PRACTICE *********************");
console.log("12 - Subsets");

function subsets(word) {
  const reversedWord = [];
  for (let index = 1; index < word.length; index++) {
    reversedWord.push(word.slice(index, word.length)); 
  }
  return reversedWord; 
}

function subsets2(word) {
  const iteratedWord = word.split("").slice(1);
  return iteratedWord.map((character, index) => iteratedWord.join("").slice(index));
}

console.log(subsets('message')); // ["essage", "ssage", "sage", "age", "ge", "e"]
console.log(subsets2('message'), 'hola');
