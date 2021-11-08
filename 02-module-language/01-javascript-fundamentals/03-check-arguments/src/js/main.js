console.log("************** PRACTICE *********************");
console.log("03 - Check Arguments");

function f(input) {
  var result;
  input === undefined ? "Unknown" : (input === null ? "" : result);
  
  console.log(f(""));
  console.log(f("Hello, it's me"));
}
