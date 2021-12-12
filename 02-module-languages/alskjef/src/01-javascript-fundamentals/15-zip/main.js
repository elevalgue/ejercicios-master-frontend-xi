console.log("************** PRACTICE *********************");
console.log("15 - Zip");

const finalObj = {};
function zipObject(keys, values) {
  for (let index = 0; index < values.length; index++) {
    finalObj[keys[index]] = values[index];
  }
  return finalObj;
}

console.log(
  zipObject(['spanish', 'english', 'french'], ['hola', 'hi', 'salut'])
); // {spanish: "hola", english: "hi", french: "salut"}