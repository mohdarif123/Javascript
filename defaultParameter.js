const abc = (num1, num2) => {
    if (typeof num2 === "undefined") {
        num2 = 1;
    }
    return num1 + num2;
}
console.log(abc(4));