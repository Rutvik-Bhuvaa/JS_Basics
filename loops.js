// for loop

for (let i = 0; i < 10; i++) {
  console.log(`${i} Hello coder army`);
}

// sum of first n numbers
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

const obj = {
  name: "John",
  age: 20,
  amount: 100,
  city: "New York",
};

const keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
  console.log(obj[keys[i]]);
  console.log(keys[i]);
}

// for in loop
let user = {
  name: "Rutvikbhuvaa",
  age: 20,
  gender: "male",
  city: "Surat",
};

for (let key in user) {
  console.log(key, user[key]);
}

let objTwo = Object.create(obj);
objTwo.money = 1000;
objTwo.id = 123;
console.log(objTwo);
console.log(Object.keys(objTwo)); // Only its own properties whereas for in loop gives all properties(own and inherited)
for (let key in objTwo) {
  console.log(key, objTwo[key]);
}

// Here why for in loop is not printing the prototype properties?
/**obj have five things
 * 1. key
 * 2. value
 * 3. writable  ==> if true then we can change the value of the property otherwise not
 * 4. enumerable ==> if true of any key then for in loop will print that key if inherited properties are true then also print otherwise not
 * 5. configurable ==> if true then we can change the writable and enumerable properties otherwise not
 */

console.log(Object.getOwnPropertyDescriptor(objTwo, "money"));

let objThree = {};
Object.defineProperty(objThree, "name", {
  value: "Rutvikbhuvaa",
  writable: true,
  enumerable: true,
  configurable: true,
});

const personalInfo = {
  name: "Rutvikbhuvaa",
  age: 20,
  bankBalance: 10000000000,
};

Object.defineProperties(personalInfo, {
  bankBalance: {
    writable: false,
  },
});

/**
 * // Another syntax
 * Object.defineProperty(personalInfo, "bankBalance", {
 *  writable: false,
 * });
 */

personalInfo.bankBalance = 3000000000;
console.log(personalInfo.bankBalance);

const customer = {
  name: "Rutvikbhuvaa",
  age: 20,
  bankBalance: 10000000000,
  city: "Vadodara",
};

Object.defineProperty(customer, "name", {
  enumerable: false,
});

for (let key in customer) {
  console.log(key, customer[key]);
}

// Here customer also inherit the properties from the Object.prototype but it is not printing the properties of the Object.prototype because the enumerable property of the Object.prototype is false
// proof
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// ==> So, basically for in loop is not printing the properties of the Object.prototype because the enumerable property of the Object.prototype is false

// Note: for in loop never applies on array because array is also an object so we can add some properties to the array and then we can use for in loop on that array but array keys are index which is number but due to object it also print that index even after index is not a number
