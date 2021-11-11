console.log("************** PRACTICE *********************");
console.log("05 - Deep Equals");

console.log("----- Apartado A ------");

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

// isEqual = (a, b) => {
  
//   // 1. We're setting the keys of each one of the objects
//   const objAkeys = Object.keys(user);
//   const objBkeys = Object.keys(clonedUser);

//   // 2. A easy thing to test if they both are equals is to check that they have the same number of items.
//   if (objAkeys.length !== objBkeys.length) {
//     console.log(objAkeys.length );
//     return false;
//   }

//   // 3. We're going through the objects keys
//   for (let objKey of objAkeys) {
//     // we're grabbing the keys of the objs
//     if (a[objKey] !== b[objKey]) {
//       return false; 
//     }
//   }
// }

function isEqual(a, b) {
  const objAkeys = Object.keys(user);
  const objBkeys = Object.keys(clonedUser);

if (a === b) {
    return true;
  }
else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
  
    if (objAkeys.length != objBkeys.length)
      return false;

    for (let objKey in a) {
      if (b.hasOwnProperty(objKey))
      {  
        if (!isEqual(a[objKey], b[objKey]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else 
    return false;
}




console.log(isEqual(user, clonedUser));

