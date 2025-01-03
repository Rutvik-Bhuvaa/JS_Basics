// Set is a collection of unique values and values can be of any type

const firstSet = new Set([10, 20, 30, 40, 10, 30]);
console.log(firstSet);

// another way to create set
const secondSet = new Set();
secondSet.add(10);
console.log(secondSet);
console.log(secondSet.size);

const user_id = new Set([
  "rutvik_bhuvaa9",
  "shrutik_bhuva43",
  "smit_ramani4603",
]);

console.log(user_id.has("rutvik_bhuvaa9"));
user_id.delete("rutvik_bhuvaa9");
console.log(user_id);

// convert array to set
const array = [10, 20, 30, 40, 10, 30];
const set = new Set(array);
console.log(set);

// convert set to array
const array2 = Array.from(set);
console.log(array2);

// union of two sets
let setThree = new Set([10, 30, 40, 50]);
let setFour = new Set([20, 40, 60, 80]);

const union = new Set([...setThree, ...setFour]);
console.log(union);

// intersection of two sets
const intersection = new Set([...setThree].filter((x) => setFour.has(x)));
console.log(intersection);

// Iterate over set
// Using for of loop
for (const value of setThree) {
  console.log(value);
}

// Using forEach loop
setThree.forEach((value) => {
  console.log(value);
});
