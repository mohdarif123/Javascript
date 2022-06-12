// string ma kise bhi index ki value ko print karna

let firstName = "Mohd Arif";
const resutl = firstName[3];
console.log(resutl, "result");
console.log(firstName.length, "length")

// conditon of length basis
if (firstName.length >= 0) {
    console.log("yes, lenght is greater than 0");
} else {
    console.log("lenght is not greater than 0")
}

// for last index value
console.log(firstName[firstName.length-1],"--");