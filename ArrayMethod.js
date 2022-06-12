// Array method
// 1.push  method
let fruits = ["mango", "banana", "orange"];
console.log(fruits);

// push use to insert value in the end
fruits.push("arif");
console.log(fruits,"push");

// pop use to remove value in the end
console.log(fruits.pop());
console.log(fruits,"pop")

let poppedFruit = fruits.pop(); // return this value and we can use this anywhere
fruits[0]=poppedFruit;
console.log(fruits,"use anywhere")

// unShift use for insert value  in array starting position

let abc = ['a','b'];
abc.unshift("c","d");
console.log(abc,"unshift")

// shift is use for removing value of array at starting position
let s = ["a","b"];
s.shift();
console.log(s,"shift")



