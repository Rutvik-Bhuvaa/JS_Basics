const d = new Date();
console.log(d);
console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString());

console.log(typeof d);

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());

// Number: 0 based start
// String: 1 based start
console.log(d.getTime());
const now = Date.now();
console.log(now);
d.setDate(1);
d.setMonth(12);
d.setFullYear(2023);
console.log(d);
console.log(d.toLocaleDateString());
