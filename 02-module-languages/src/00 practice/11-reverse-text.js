console.log('************** PRACTICE *********************');
console.log('11 - Reverse Text');

const tongueTwister = "She sells seashells on the seasore"; 

function reverseText(text) {
  const splitText = text.split("");
  const reserveText = splitText.reverse();
  const joinText = reserveText.join("");
  
  return joinText; 
}

console.log(reverseText(tongueTwister));