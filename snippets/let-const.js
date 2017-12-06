// ES5
var globalVar = "global content";
var globalVar = "re declared this variable, still fine!!!";
// ES6
let myVar = 5;
let myVar = 6; // this will cause error.

const MY_CONST = "Can not reassign or redeclare";
const MY_CONST = 'asdasd'; // cause errors.
MY_CONST = "try to reassign"; // cause error too, cannot reassign constant.

// but, if our const is an object
const people = {
  name: 'Dung',
  age: 15
};
people.age = 34; // its ok

// still works because function hoisting
myFunc("params1");

if (true) {
  var blockInner = "inside if block";
  console.log(blockInner); // "inside if block"
  let blockVar = 'inside this block';
  console.log(blockVar); // ok
}
// this still works....
console.log(blockInner); // "inside if block"
// this will not work
console.log(blockVar); // not defined...

function myFunc(params) {
  console.log(params);
}

