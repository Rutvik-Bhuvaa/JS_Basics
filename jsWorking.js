// It gives undefined
console.log(x);
var x = 10;

// It gives error due to initialization before
/**
 *  console.log(y);
    let y = 10;
*/

// Hoisting in JS is the behaviour where variables and function declaration are moved to the top of their containg scope during the compilation  phase, before the code has been executed.

greet();
function greet() {
  console.log("Hello, world!");
}

meet();
let meet = function () {
  console.log("Hi there");
};
