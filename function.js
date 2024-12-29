function greet() {
  console.log("hi there");
}

greet();

function sum(numberOne, numberTwo) {
  console.log(numberOne + numberTwo);
}

sum(3, 3);

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

const answer = multiply(3 * 3);
console.log(answer);

// Another way to define an function
const fun = function () {
  console.log("hi there");
};
fun();

// Arrow function
const funOne = () => {
  console.log("hi there");
};

funOne();

const cube = (number) => number * number * number;

const result = cube(2);
console.log(result);

const print = (...number) => {
  console.log(number);
};

print(1, 2, 3, 34, 5);

const obj = {
  name: "RutvikBhuvaa",
  age: 20,
  amount: 330,
};

function fun({ name, amount }) {
  console.log(name, amount);
}

fun(obj);
