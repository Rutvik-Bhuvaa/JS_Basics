// All about array
const arr = [2, 3, 45, 6, 34, 23];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
console.log(arr[-1]); // it gives undefined

console.log(arr.at(-1)); // latest also taken negative value give answer

const newArr = arr; // here array is stored in heap memory and its address stored in stack memory
console.log(newArr == arr);

const newarr = structuredClone(arr); // now both array point different in stack memory
console.log(newarr == arr);

// push ==> add element at the last in array
arr.push(10);
console.log(arr);

// pop ==> remove last element of the array
arr.pop();
console.log(arr);

// unshift ==> add element at the start of the array
arr.unshift(1);
console.log(arr);

// shift ==> give first element of the array
arr.shift();
console.log(arr);

// delete operation  ==> it delete the operation but reserve the space

// delete arr[0];
console.log(arr);

// indexof and lastindexof

arr.push(3);
console.log(arr);
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));

// slice ==> it doesn't change the original array
console.log(arr.slice(2, 5));
console.log(arr);

// splice ==> it changes the original array
console.log(arr.splice(2, 3));
//splice(strting_index, count_of_deleted_element, add_value)
console.log(arr.splice(2, 3, "honey", "bunny", "funny"));
console.log(arr);

// toString
console.log(arr.toString());
console.log(typeof arr.toString());

// Join operation
console.log(arr.join("*"));
console.log(typeof arr.join());

// concat

const arr1 = [2, 56, 64, 28, 3];
const arr2 = [6, 23, 43, 55, 24];
const arr3 = arr1.concat(arr2);
console.log(arr3);
arr1.push(arr2);
console.log(arr1);
console.log(arr1[5][0]);

// 2D array
const arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr2d);
console.log(arr2d[0][2]);

// 3D array

const arr3d = [
  [1, 2, [4, 5]],
  [6, 7, 8],
];
console.log(arr3d[0][2][0]);

// flat operator => to convert into 1d array
const arr_new = arr2d.flat(Infinity);
console.log(arr_new);

let abc = [2, 1, 4, 1];
console.log(Array.isArray(abc));

// Another way to create an array but it is not recommended
const arrNew = new Array(2, 4, 6, 8);
console.log(arrNew);
