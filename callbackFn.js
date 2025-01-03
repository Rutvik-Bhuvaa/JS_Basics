// callback function

function names(fun) {
  console.log("Hello i am name");
  fun();
}

function greet() {
  console.log("Hello i am callback function ");
}

names(greet);

// filter  ==> It takes callback function as a argument and return new array
let arr = [10, 22, 33, 41, 50];
const result = arr.filter((num) => num % 2 === 0);
console.log(result);

const students = [
  {
    name: "Rohan",
    age: 20,
    marks: 80,
  },
  {
    name: "Shubham",
    age: 21,
    marks: 70,
  },
  {
    name: "Rohit",
    age: 22,
    marks: 60,
  },
  {
    name: "Raj",
    age: 23,
    marks: 50,
  },
  {
    name: "Rajesh",
    age: 24,
    marks: 40,
  },
];

const answer = students.filter((student) => student.marks > 50);
const anotherAnswer = students.filter(({ marks }) => marks > 50);
console.log(anotherAnswer);
console.log(answer);

// map  ==> It takes callback function as a argument and return new array
/**
 * filter ==> only filter the value
 * map ==> modify the value but it return new array whereas forEach return nothing
 */
const arrTwo = [1, 2, 4, 5];
const resultMap = arrTwo.map((num) => num * num);
console.log(resultMap);

// reduce  ==> It takes callback function as a argument and return single value
const arrThree = [10, 20, 30, 40, 50];
const finalResult = arrThree.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(finalResult);

const fruits = [
  "orange",
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "grapes",
];
const resultReduce = fruits.reduce((acc, curr) => {
  if (acc.hasOwnProperty(curr)) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(resultReduce);
