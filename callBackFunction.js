// its take function as an argument to another function
function abc() {
    console.log("callback");
}


function xyz(callback) {
    console.log("xyz function");
    callback(); //this is callback funtion
}

console.log(xyz(abc));