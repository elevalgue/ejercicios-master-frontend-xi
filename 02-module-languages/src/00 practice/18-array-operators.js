console.log('************** PRACTICE *********************');
console.log('02 - Array Operations');

console.log("----- Apartado A ------");
const arr = ["a", "b", "c", "d", "e"]; 
const head = ([first]) => first;
console.log(head(arr));
console.log("-----------------------");

console.log("----- Apartado B ------");
const tail = ([ ,...rest]) => rest
console.log(tail(arr));
console.log("-----------------------");

console.log("----- Apartado C ------");
const init = array => arr.slice(0, arr.length -1); 
console.log(init(arr));
console.log("-----------------------");

console.log("----- Apartado D ------");
const last = array => arr.pop(0, arr.length -1); 
console.log(last(arr));
console.log("-----------------------");

