console.log("************** DELIVERABLE 01 *********************");

console.log('/*----- 1. Head -----*/')

const fruits = ["Apple", "Banana", "Watermelon"];

const head = (array) => {
  const [first, ...rest] = fruits;
  return first; 
};

const head2 = ([first, ...rest]) => first; 

console.log(head(fruits));
console.log(head2(fruits));

console.log('/*----- 2. Tail -----*/')

const tail = (array) => {
  const [ , ...rest] = fruits;
  return rest; 
}

const tail2 = ([, ...rest]) => rest;

console.log(tail(fruits));
console.log(tail2(fruits));

console.log('/*----- 3. Init -----*/')

const init = (array) => fruits.slice(0, fruits.length - 1);

console.log(init(fruits));
