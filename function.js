// normal function 
function abc() {
    console.log("function");
}

abc();


// to check even or odd

const value = 12;

function oddEven() {
    if (value % 2 === 0) {
        console.log("Even number");
    } else {
        console.log("odd number");
    }
}

oddEven();

// return starting first value

function firstString(antString) {
    return antString[0];
}
console.log(firstString("arif mansoori"));


// function 
// input :array , target(Number)
console.log("check value index number");
function arrayFunction(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        } else {
            return -1;
        }
    }
}
const arrayNumber = [1, 3, 4, 4, 5, 5, 65, 6, 6, 6];
const result = arrayFunction(arrayFunction, 1);
console.log(result,"arrayResult");

// function expression

// function ko variable ma store karna 

const abcd = function(){
    console.log("this is a fuction expression");
}
abcd();