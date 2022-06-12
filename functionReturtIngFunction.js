function abc() {
    return "india is great country";
}

console.log(abc(), "abc"); //india is great country


// function returning function

function a() {
    function b() {
        return "hello";
    }
    return b;
}

const xyz = a();
console.log(xyz(), "arif")
