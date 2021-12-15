console.log("************** DELIVERABLE 01 *********************");

// Data
const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log('/*------ 1. Head ------*/')
const head = (array) => {
  const [first, ...rest] = array;
  return first; 
};

const head2 = ([first, ...rest]) => first;

console.log(head(weekdays));
console.log(head2(weekdays));
console.log("/*---------------------*/");


console.log('/*------ 2. Tail ------*/')
const tail = (array) => {
  const [ , ...rest] = array;
  return rest; 
}

const tail2 = ([, ...rest]) => rest;

console.log(tail(weekdays));
console.log(tail2(weekdays));
console.log("/*---------------------*/");

console.log('/*------ 3. Init ------*/')
const init = (array) => array.slice(0, array.length - 1);

console.log(init(weekdays));
console.log("/*---------------------*/");

console.log('/*------ 4. Last ------*/')
const last = (array) => array.pop(0, array.length - 1); 
console.log(last(weekdays));
console.log("/*---------------------*/");
