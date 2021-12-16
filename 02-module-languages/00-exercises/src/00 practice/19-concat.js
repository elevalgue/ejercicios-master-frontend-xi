console.log('************** PRACTICE *********************');
console.log('03 - Concat');

console.log("----- Apartado A ------");
const numbers = [1, 2, 3, 4, 5]; 
const letters = ["a", "b", "c", "d", "e"]; 
const boolean = [true, false];
const arrayN = ["jan", "feb", "mar", "apr", "may"];

const concat = (a, b) => [...a, ...b];

console.log(concat(numbers, letters));
console.log("-----------------------");

console.log("----- Apartado B ------");
const concatMulti = (array1, array2, array3, arrayN) => [...array1, ...array2, ...array3, ...arrayN];

console.log(concatMulti(numbers, letters, boolean, arrayN));
console.log("-----------------------");
