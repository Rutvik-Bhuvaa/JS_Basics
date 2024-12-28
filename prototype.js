// prototype ==> it is like design. It is like extra features.
// any array inherit properties from Array.prototype and it is inherit the properties from Object.prototype
// Basically it is an object that provides methods and properties for other object to inherit from
let userOne = {
  name: "RutvikBhuvaa",
  age: 20,
};

let userTwo = {
  amount: 330,
  money: 60,
};

userTwo.__proto__ = userOne;
console.log(userTwo.name);
console.log(userTwo.money);
