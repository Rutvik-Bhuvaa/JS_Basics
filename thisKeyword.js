// globalThis is common for all environments like browsers and also for node

// let and const are not the part of the global object

// THIS keyword in JS is a special keyword that refers to the context in which the current code is being executed

/**
 1. Global context(Outside any function)
 * In Browser : window
 * In Node js : Module's export object 
 */

console.log(this);

/**
 2. Inside a function 
 * i. Non-strict mode
 ==> When this keyword is used inside the function then it refers to the global object
 * ii. Strict mode
 ==> this will be undefined inside the function
 */
function greet() {
  console.log(this);
}
greet();

/**
 3. Inside method (Object context)
 ==> When this is used inside the object's method then it refers to the object that owns this particuler method 
 */

const obj = {
  name: "RutvikBhuvaa",
  age: 20,
  greet: function () {
    console.log(this);
  },
};

obj.greet();

// Arrow function don't have their own this but they inherit from the surrounding (lexical) scope

let user = {
  name: "xyz",
  age: 11,
  meet: () => {
    console.log(this);
  },
};

user.meet();

// Inside constructor or class this keyword refers to the instance of the object being created

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const firstPerson = new Person("Rutvik", 20);
console.log(firstPerson);
