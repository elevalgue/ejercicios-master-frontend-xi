console.log('************** PRACTICE *********************');
console.log('01 - Args');

console.log("----- Apartado A ------");
function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

f('JS rocks!', { b: 'b' });
console.log("-----------------------");

console.log("----- Apartado B ------");
f({ b: 'b' });
console.log("-----------------------");

