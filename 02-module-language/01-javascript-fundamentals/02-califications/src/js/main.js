console.log("************** PRACTICE *********************");
console.log("02 - Califications");

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function values({...eso2o}) {
  return Object.values(eso2o)
}

const getAverage = eso2o => eso2o.reduce((a, b) => a + b, 0) / eso2o.length;
console.log(getAverage, );

// function printAverage(classResults) {
//   const expr = '';
//   switch (key) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// }

console.log(values({ David: 8.25, Maria: 9.5, Jose: 6.75, Juan: 5.5, Blanca: 7.75, Carmen: 8, }));
// [8.25, 9.5, 6.75, 5.5, 7.75, 8]

