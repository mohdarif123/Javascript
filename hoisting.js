abc();
function abc(){
    console.log("valid in function declaration case");
}


// its not valid in function expression
xyz();
const xyz = function(){
    console.log("not valid in function expression");
}

// not valid in variable 
console.log(a,"variable is not valid")
const a = 443;