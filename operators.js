// 1. Increment and Decrement operator
let num = 20;
// post increment and decrement (first print and then increment/decrement)
console.log(num++);
console.log(num--);
// pre increment and decrement (first increment/decrement and then print)
console.log(++num);
console.log(--num);

// 2. Assignment operator
let numTwo = 10; // = is used for assign value to numTwo
console.log(numTwo);

// 3. Comparison operator

// number to number
let a1 = 1;
let a2 = 2;
console.log(a1 == a2);
console.log(a1 > a2);
console.log(a1 < a2);
console.log(a1 <= a2);
console.log(a1 >= a2);

let digit = 10;
let str = "10";
console.log(digit == str); // true => Here first string convert into the number then comparison begins

// null == undefined --> true otherwise false
console.log(null == undefined);
// null === undefined --> false
console.log(null === undefined);
// null can be only equivalent to undefined
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

// NaN is never equal to NaN
console.log(NaN == NaN);
