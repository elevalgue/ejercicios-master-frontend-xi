console.log('************** PRACTICE *********************');
console.log('05 - Fibonacci');

let firstValue = 0; 
let secondValue = 1; 
let count = 0;

const fib = (n) => {
while ( secondValue <= n ) {
  [firstValue, secondValue] = [firstValue + secondValue, firstValue];

  if (firstValue % 2 !== 0) {
    count += firstValue; 
  }
}
  return count
}

console.log(fib(4));