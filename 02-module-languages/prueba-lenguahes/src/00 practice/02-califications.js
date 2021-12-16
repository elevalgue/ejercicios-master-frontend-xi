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

console.log(values({ David: 8.25, Maria: 9.5, Jose: 6.75, Juan: 5.5, Blanca: 7.75, Carmen: 8, }));
// [8.25, 9.5, 6.75, 5.5, 7.75, 8]

function getAverage(average) {
  let marks = values(average);
  let total = marks.reduce((acc, sum) => acc + sum);
  return total / marks.length;
}

console.log(getAverage(eso2o));

function printAverage(mark) {
  switch (true) {
    case (mark <= 4):
      console.log("Muy deficiente");
      break;
    
    case (mark > 4 && mark < 5):
      console.log("Insuficiente");
      break;
    
    case (mark >= 5 && mark < 6):
      console.log("Suficiente");
      break;
    
    case (mark >= 6 && mark < 7):
      console.log("Bien");
      break;
    
    case (mark >= 7 && mark < 9):
      console.log("Notable");
      break;
    
    case (mark >= 9 && mark < 10):
      console.log("NotabSobresalientele");
      break;
    
    case (mark === 10):
      console.log("Matrícula de Honor");
      break;
    }
  }
  
console.log(printAverage(eso2o.David));
console.log(printAverage(eso2o.Maria));
console.log(printAverage(eso2o.Jose));
console.log(printAverage(eso2o.Juan));
console.log(printAverage(eso2o.Blanca));
console.log(printAverage(eso2o.Carmen));
