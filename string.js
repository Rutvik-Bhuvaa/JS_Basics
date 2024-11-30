let strOne = "Hi there";
let strTwo = "Kaise ho sab";
let price = 50;
let strThree = `Price of the tomato is ${price}`;

console.log(strOne);
console.log(strTwo);
console.log(strThree);

// string concatination
let s1 = "Hello ";
let s2 = "Coder army";
console.log(s1 + s2);

// string length
console.log(s1.length);
console.log(s2.length);

// "hello coders"
console.log('"hello coders"');

// 'hello coders'
console.log("'hello coders'");

let special = "rutvikBhuvaa";
console.log(special[4]);
console.log(special.charAt(3));

// sting conversion in uppercase and lowercase
console.log(special.toLowerCase());
console.log(special.toUpperCase());

// Searching in string
let hero = "Hello coder army";
console.log(hero.indexOf("coder")); // give the index of first character
console.log(hero.indexOf("Coder")); // give the output => -1
console.log(hero.includes("coder"));

// extracting substring
let newString = "Hithere";
// slice also include negative index whereas substring doesn't
console.log(newString.slice(0, 3)); // last index excluded in output
console.log(newString.slice(-6, 5));
console.log(newString.slice(-2, 4));
console.log(newString.substring(0, 3));

let s = "Hello Ji Kaise Ho";
console.log(s.replace("Ji", "Money"));
console.log(s.replaceAll("Ji", "Money"));

let example = "Money! Honey! Sunny! Funny";
console.log(example.split("! "));

let strExample = "    Hi there";
console.log(strExample.trim());
console.log(strExample.trim().length); // Deduct the starting and ending space from the string in output

// new way to create String

let latest = new String("Hello coders");
console.log(latest);
console.log(typeof latest);
