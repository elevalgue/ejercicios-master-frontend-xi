console.log("************** PRACTICE *********************");
console.log("01 - Biggest Word");

function biggestWord(phrase) {
  const splitWords = phrase.split(' ');
  let index = splitWords.reduce((acc, curr, i) => {
    if (curr.length > splitWords[acc].length) {
      return i
      
    } else {
      return acc;
    }
  }, 0)

  return splitWords[index];
}

// // Ejemplo
console.log(biggestWord('Esta frase puede contener muchas palabras')); // "contener"
console.log(biggestWord('Ejercicios básicos de JavaScript JavaScripr')); // "Ejercicios"