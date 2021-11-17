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
  
  function rollDices(max, min) {
    diceA = Math.floor(Math.random(max, min) * (6 - 1) + 1);
    diceB = Math.floor(Math.random(max, min) * (6 - 1) + 1);
    console.log('Cruza los dedos y tira los dados 🎲');
    console.log(diceA);
    // reset();
  }
  console.log(diceA, 'hello');
  
  
  return {
    renderMessage: function () {
      rollDices()
      if (diceA === 6 && diceB === 6) {
        console.log('🎉🎉 Enhorabuena! tenemos ganador🎉🎉 🏆');
      } else {
        console.log(`El primer dado es ${diceA} y el segndo ${diceB}`);
      }
    }
  }

}

let roll = renderDices();
roll.renderMessage();
roll.renderMessage();
roll.renderMessage();
roll.renderMessage();