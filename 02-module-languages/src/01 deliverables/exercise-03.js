console.log("%c************** DELIVERABLE 03 *********************", 'color: green');

// Data: 
const product = {
  name: 'apple',
  category: 'fruit',
  price: 1.99,
};

console.log('%c/*------ 1. Clone ------*/', 'color: blue'); 
function clone(source) {
  return { ...source }; 
}

console.log(clone(product));
console.log("%c/*---------------------*/", "color: blue");


console.log('%c/*------ 2. Merge ------*/', 'color: blue'); 
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return {...target, ...source}
}

console.log(merge(a, b));
console.log("%c/*---------------------*/", "color: blue");

