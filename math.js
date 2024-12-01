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
