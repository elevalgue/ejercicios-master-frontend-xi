console.log("************** DELIVERABLE 03 *********************");

// Data: 
const product = {
  name: 'apple',
  category: 'fruit',
  price: 1.99,
};

console.log('/*------ 1. Clone ------*/')
function clone(source) {
  return { ...source }; 
}

console.log(clone(product));
console.log("/*---------------------*/");

console.log('/*------ 2. Merge ------*/')
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return {...target, ...source}
}

console.log(merge(a, b));
console.log("/*---------------------*/");

