console.log("************** PRACTICE *********************");
console.log("09 - Primes");

// let diceA; 
// let diceB; 

function renderDices() {
  let diceA; 
  let diceB;
  console.log(diceA, diceB, 'hello world from render');
  
  function reset() {
    diceA = null; 
    diceB = null;
    console.log(diceA, diceB, 'hello world from reset');
  }
  reset();
}

renderDices();
