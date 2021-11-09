console.log("************** PRACTICE *********************");
console.log("05 - Deep Equals");

console.log("----- Apartado A ------");

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

isEqual = (a, b) => {
  // 1. We're setting the keys of each one of the objects
  const aKeys = Object.keys(user);
  const bKeys = Object.keys(clonedUser);

  // 2. A easy thing to test if they both are equals is to check that they have the same number of items.
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  // 3. We're going through the objects keys
  for (let aKey of aKeys) {
    // we're grabbing the keys of the objs
    if (a[aKey] !== b[bKey]) {
      return false; 
    }
  }
}


a === b;
console.log(isEqual(user, clonedUser));

