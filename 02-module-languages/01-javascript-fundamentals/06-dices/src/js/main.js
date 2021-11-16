console.log("************** PRACTICE *********************");
console.log("06 - Dices");

function renderDices() {
  let diceA; 
  let diceB;
  console.log(diceA, diceB);
  
  function rollDices(min, max) {
    diceA = Math.random(min, max) * (6 - 1) + 1;
    diceB = Math.random(min, max) * (6 - 1) + 1;
    console.log('Cruza los dedos y tira los dados 🎲');
  }

  // function reset() {
  //   diceA = null; 
  //   diceB = null;
  //   console.log(diceA, diceB, 'los dados deberían ser null');
  // }
  
  return {
    renderMessage: function () {
      rollDices()
      if (diceA === 6|| diceB === 6) {
        console.log('🎉🎉 Enhorabuena! tenemos ganador🎉🎉 🏆');
      }
    }
  }
}
// reset();

let roll = renderDices();
roll.renderMessage();
roll.renderMessage();
roll.renderMessage();
roll.renderMessage();