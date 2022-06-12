// Array destructuring es6 feature
const num1 = [1, 2, 3, 4, "arif"];

let abc = num1[0];
console.log(abc, "abc");

let [arr1, arr2, , arr3, ...myRestArrayValue] = num1;
console.log(myRestArrayValue, "rest array");
let myNewArray = num1.slice(3);
console.log(myNewArray, "copy new array");
console.log(arr1, "arr1");
console.log(arr2, "arr2");
console.log(arr3, "arr2")

