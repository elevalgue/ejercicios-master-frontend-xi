console.log('************** PRACTICE *********************');
console.log('05 - Fibonacci');

const fib = (n) => Array(n).fill(0).reduce((acc, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), [])

console.log(fib(0));