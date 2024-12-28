// how to create object

// key of the object store as a string
// if we take key as a number then it is also consider as a string
const obj = {
  0: 30,
  firstName: "RutvikBhuvaa",
  accountBalance: 420,
  gender: "Male",
  age: 30,
};

console.log(obj);
// to retrieve the properties of the object
console.log(obj.gender);
console.log(obj["gender"]);
console.log(obj["0"]);
console.log(obj[0]);
console.log(typeof obj);

// 2nd method to create object
const person = new Object();
console.log(person);
// add properties
person.name = "RutvikBhuvaa";
person.age = 22;
person.gender = "Male";
console.log(person);

// 3rd method to create object
class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

let personOne = new People("RutvikBhuvaa", 22, "Male");
let personTwo = new People("ShrutikBhuva", 18, "Male");
console.log(personTwo);
console.log(personOne);

// Common methods for objects
let people = {
  name: "xyz",
  gender: "Male",
  age: 43,
  accountBalance: 3432,
};

// to access keys and values of the object
const arr = Object.keys(people);
const arrValues = Object.values(people);

const arrOne = Object.entries(people);
console.log(arr);
console.log(arrValues);
console.log(arrOne);

// Assign & spread operator use case  ==> it creates the deep copy of the object but if this object have nested object then it follows the rule of by reference that means it works as shallow copy for nested part
const objOne = { a: 1, b: 2 };
const objTwo = { c: 1, d: 2 };

const objThree = Object.assign({}, objOne, objTwo);
console.log(objThree);

const objFour = { ...objOne, ...objTwo };
console.log(objFour);

// Destructuring of an object
let obj1 = {
  name: "xyz",
  money: 420,
  balance: 2333,
  age: 32,
};
const { name, balance, age } = obj1;
const { name: fullName, balance: amount, age: Umar } = obj1;
console.log(fullName, amount, Umar);
console.log(name, balance, age);

const arr1 = [1, 3, 4, 6, 7, 2];
const [first, second] = arr1;
const [third, fourth, , fifth] = arr1;
console.log(first, second);
console.log(first, second, third);

const obj2 = {
  name: "rutvikbhuvaa",
  age: 21,
  arr: [30, 40, 50, 60, 70],
  address: {
    pincode: 233564,
    city: "Gurugram",
  },
};

const {
  address: { pincode, city },
} = obj2;
const { address: adds } = obj2;
const {
  arr: [firstElement],
} = obj2;
console.log(firstElement);
console.log(pincode, city);
console.log(adds);

let user = {
  name: "rutvikbhuvaa",
  amount: 330,
  greet: function () {
    console.log("hi there");
  },
};

user.greet();

// prototype ==>
