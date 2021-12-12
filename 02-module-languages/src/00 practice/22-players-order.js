console.log('************** PRACTICE *********************');
console.log('06 - Players Order');

const getPlayersOrder = (players, turns) => {
  let position = [...players];
  for (let i = 0; i < turns; i++) {
    let [firstPlayer, ...restPlayers] = position;
    position = [...restPlayers, firstPlayer]; 
  }
  return position; 
}; 

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(['Ana', 'Juan', 'Pablo', 'Lucia'], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
