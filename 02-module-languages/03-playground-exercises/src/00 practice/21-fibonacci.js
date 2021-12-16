console.log('************** PRACTICE *********************');
console.log('05 - Fibonacci');


const fib = (n) => {
  let fibonacci = [0, 1];
  let [firstValue, secondValue] = fibonacci;

  if (n === 0) return firstValue; 
  if (n === 1) return secondValue;

  for (let index = 2; index <= n; index++) {
    [firstValue, secondValue] = [secondValue, firstValue + secondValue];
  }
  return secondValue;
}
console.log(fib(3));



