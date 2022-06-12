let array1 = ['a','b','c'];
let array2 = array1.slice(0);
array1.push("d");
console.log(array1,"array1");
console.log(array2,"array2");

// spread operator ->use for copy of array

let x = ["a","b","c"];
x.push("d");
console.log(x,"spread x");
let y = [...x];
y.push("d");
console.log(y,"spead operator");

// two array in single array
let arr1 = ["a","b"];
let arr2 = ["c","d"];

let arr3 = [...arr1,arr2];
console.log(arr3,"twoArray in single array");



