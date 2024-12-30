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
