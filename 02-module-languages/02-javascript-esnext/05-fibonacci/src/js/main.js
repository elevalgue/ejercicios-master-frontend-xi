console.log('************** PRACTICE *********************');
console.log('05 - Fibonacci');

let firstValue = 0; 
let secondValue = 1; 
let count = 0;

const fib = (n) => {
while ( secondValue <= n ) {
  [secondValue, firstValue] = [secondValue + firstValue, secondValue];

  if (firstValue % 2 !== 0) {
    count += firstValue; 
  }
}
  return count
}

console.log(fib(8));