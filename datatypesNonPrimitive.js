// Non primitive datatypes
/**
 * Array
 * Object
 * Function
 */

// Array
let arr = [10, 20, 30, "rutvik", "bhuvaa"];
console.log(arr);
console.log(typeof arr);

// Object
let obj = {
  userName: "Rutvik Bhuvaa",
  accountNumber: 42389573820577,
  balance: 600,
};
console.log(obj);
console.log(obj.userName);
console.log(obj.accountNumber);
console.log(typeof obj);

// Function
let fun = function () {
  console.log("Hi there");
  return 10;
};
console.log(fun);
console.log(fun());
console.log(typeof fun);
