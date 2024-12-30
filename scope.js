/**
 * 1. Global scope
 * 2. Function scope
 * 3. Block scope
 */

let a = 10;
var b = 20;
const c = 30;

function greet() {
  let a = 10;
  var b = 20;
  const c = 30;
  //   console.log(a, b, c);
}

greet();

console.log(b);

if (true) {
  let a = 10;
  var b = 20;
  const c = 30;
}

// console.log(a);
console.log(b);
// console.log(c);
