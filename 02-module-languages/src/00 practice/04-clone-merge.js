console.log("************** PRACTICE *********************");
console.log("04 - Clone Merge");

console.log("----- Apartado A ------");
const original = {
  name: "Evan",
  surname: "Smith",
  country: "USA",
};

function clone(obj) {
  return { ...obj };
}

console.log(clone(original));
console.log("-----------------------");

console.log("----- Apartado B ------");
var a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
var b = { name: 'Luisa', age: 31, married: true };

function merge(source, target) {
  return {...target, ...source}
}

console.log(merge(a, b));
console.log("-----------------------");
