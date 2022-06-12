const abc = () => {
    const insideAbc = () => {
        console.log("insideAbc is in abc function");
    }

    const twoNumSum = (num1, num2) => {
        return num1 + num2;
    }
    insideAbc();
    console.log(twoNumSum(2,4)); 
    console.log("abc is a arrow funtion");
}
abc();