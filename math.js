let num1 = 231;
console.log(typeof num1);
let num2 = new Number(231);
console.log(typeof num2);
let num3 = new Number(231);
console.log(num1 == num2);
console.log(num2 == num3);

let num = 231.68;
console.log(num.toFixed(1)); // 231.7
console.log(num.toPrecision(4));
console.log(num.toPrecision(2));
console.log(num.toExponential(2));
console.log(num.toString());
console.log(typeof num.toString());

// Math function in javascript
console.log(Math.E);
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
let number = 23.2;
console.log(Math.floor(number));
console.log(Math.ceil(number));

// min = 40, max = 50
console.log(Math.floor(Math.random(max - min + 1) + min));
