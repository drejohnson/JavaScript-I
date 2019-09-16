// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => console.log("Function was invoked!");
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => param;
anotherFunction("Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => param1 + param2;
add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let substract = (param1, param2) => param1 - param2;
substract(1,2)


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);

// Example of using a callback
let callback = (a, b) => console.log(a + b)
let useCallback = (a, b, cb) => cb(a, b)
useCallback(4, 9, callback)

// Example 2
let greetingCallback = (name) => console.log(name)
let logGreeting = (name, cb) => cb(name)
logGreeting('Dre', greetingCallback)

// EXTRA: Example of a Callback Closure!?!?!?
let closureCallback = (name) => console.log(`Hello ${name}`)
let sayHello = (name, cb) => {
  let greet = () => cb(name)
  return greet
}

let greeting = sayHello('World', closureCallback )
greeting()