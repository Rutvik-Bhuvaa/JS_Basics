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
