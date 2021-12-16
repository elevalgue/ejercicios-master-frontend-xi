console.log("%c************** DELIVERABLE 01 *********************", 'color: #8a136a');

// Data
const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log('%c/*------ 1. Head ------*/', 'color: #136a8a')
const head = (array) => {
  const [first, ...rest] = array;
  return first; 
};

const head2 = ([first, ...rest]) => first;

console.log(head(weekdays));
console.log(head2(weekdays));
console.log("%c/*---------------------*/", "color: #136a8a");


console.log('%c/*------ 2. Tail ------*/', "color: #136a8a")
const tail = (array) => {
  const [ , ...rest] = array;
  return rest; 
}

const tail2 = ([, ...rest]) => rest;

console.log(tail(weekdays));
console.log(tail2(weekdays));
console.log("%c/*---------------------*/", "color: #136a8a");

console.log('%c/*------ 3. Init ------*/', "color: #136a8a")
const init = (array) => array.slice(0, array.length - 1);

console.log(init(weekdays));
console.log("%c/*---------------------*/", "color: #136a8a");

console.log('%c/*------ 4. Last ------*/', "color: #136a8a")
const last = (array) => array.pop(0, array.length - 1); 
console.log(last(weekdays));
console.log("%c/*---------------------*/", "color: #136a8a");
