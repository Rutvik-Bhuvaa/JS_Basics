// Map is a collection of key-value pairs and keys and values can be of any type like primitive and objects

// Also maintain the order of insertion but key should be unique

const map = new Map();
map.set("rutvik", "rutvik@gmail.com");
map.set("shrutik", "shrutik@gmail.com");
map.set("smit", "smit@gmail.com");
map.set(3, 20);
map.set(true, "true");
map.set("rutvik", 20); // value updated in the case of duplicate key

console.log(map);
map.delete("rutvik");
console.log(map);
console.log(map.has("rutvik"));
console.log(map.size);
map.clear();
console.log(map);

console.log(typeof map);

// another way to create map
const mapTwo = new Map([
  ["rutvik", "rutvik@gmail.com"],
  ["shrutik", "shrutik@gmail.com"],
  ["smit", "smit@gmail.com"],
]);
console.log(mapTwo);

// Iterate over map
for (const [key, value] of mapTwo) {
  console.log(key, value);
}
