console.log("************** PRACTICE *********************");
console.log("06 - Dices");

function renderDices() {
  let diceA; 
  let diceB;

  function reset() {
    diceA = null; 
    diceB = null;
    console.log(diceA, diceB, 'los dados deberían ser null');
  }
  
  function rollDices(min, max) {
    diceA = Math.random(min, max) * (6 - 1) + 1;
    diceB = Math.random(min, max) * (6 - 1) + 1;
    console.log('Cruza los dedos y tira los dados 🎲');
    console.log(diceA);
    reset();
  }
  console.log(diceA, 'hello');
  
  
  return {
    renderMessage: function () {
      rollDices()
      if (diceA === 6 && diceB === 6) {
        console.log('🎉🎉 Enhorabuena! tenemos ganador🎉🎉 🏆');
      }
    }
  }
}

let roll = renderDices();
roll.renderMessage();
roll.renderMessage();
roll.renderMessage();
roll.renderMessage();