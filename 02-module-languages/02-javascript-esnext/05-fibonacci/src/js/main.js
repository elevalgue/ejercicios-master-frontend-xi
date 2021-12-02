console.log('************** PRACTICE *********************');
console.log('05 - Fibonacci');

const fibonacci = [0, 1];

const fib = (n) => {
  let [firstValue, secondValue] = fibonacci;

  if (n === 0)  {
    return firstValue
  }

  if (n === 1) {
    return secondValue
  }

  for (let index = 2; index < n; index++) {
    [firstValue, secondValue] = [secondValue, firstValue + secondValue];
  }
  return secondValue;
  
}

console.log(fib(7));


// let a = 2;
// console.log(a);
// let b = 5;
// console.log(b);

// [a, b] = [b, a];
// console.log(a, 'a');
// console.log(b, 'b');