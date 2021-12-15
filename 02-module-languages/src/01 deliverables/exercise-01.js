console.log("************** DELIVERABLE 01 *********************");

console.log('/*------ 1. Head ------*/')
const letters = ["a", "b", "c", "d", "e"]; 

const head = (array) => {
  const [first, ...rest] = letters;
  return first; 
};

const head2 = ([first, ...rest]) => first;

console.log(head(letters));
console.log(head2(letters));
console.log("/*---------------------*/");


console.log('/*------ 2. Tail ------*/')
const tail = (array) => {
  const [ , ...rest] = letters;
  return rest; 
}

const tail2 = ([, ...rest]) => rest;

console.log(tail(letters));
console.log(tail2(letters));
console.log("/*---------------------*/");


console.log('/*------ 3. Init ------*/')
const init = (array) => letters.slice(0, letters.length - 1);

console.log(init(letters));
console.log("/*---------------------*/");
