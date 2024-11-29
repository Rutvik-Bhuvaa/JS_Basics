// Type conversion

// String to number conversion
let accountBalance = "10";
let num = Number(accountBalance);
console.log(typeof accountBalance); // type => string
console.log(typeof num); // type => number

// Boolean to number conversion
let bool = true;
let numTwo = Number(bool);
console.log(typeof bool); // type => boolean
console.log(typeof numTwo); // type => number

// null to number conversion
let nullNum = null;
let numThree = Number(nullNum);
console.log(typeof nullNum); // type => null
console.log(typeof numThree); // type => number(0)

// undefined to number conversion
let undef = undefined;
let numFour = Number(undef);
console.log(typeof undef); // type => undefined
console.log(typeof numFour); // type => number(NaN)
