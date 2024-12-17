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
