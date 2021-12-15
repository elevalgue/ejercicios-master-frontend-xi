console.log("************** DELIVERABLE 02 *********************");

// Data
const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const numbers = [1, 2, 3, 4, 5];
const boolean = [true, false];
const arrayN = ["jan", "feb", "mar", "apr", "may"];


console.log('/*------ 1. Concat ------*/')
const concat = (a, b) => [...a, ...b];

console.log(concat(weekdays, numbers));

const concatMulti = (array1, array2, array3, arrayN) => [...array1, ...array2, ...array3, ...arrayN];

console.log(concatMulti(weekdays, numbers, boolean, arrayN));
console.log("/*---------------------*/");
