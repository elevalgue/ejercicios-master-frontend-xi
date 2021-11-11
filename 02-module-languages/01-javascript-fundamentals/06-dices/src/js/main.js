console.log("************** PRACTICE *********************");
console.log("06 - Dices");

let diceA;
let diceB;

function getNumbers() {
  return Math.floor(Math.random() * (6 - 1)) + 1; 
}

console.log(getNumbers());