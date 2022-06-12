// it allow to accept indefinite Number of argument as an Array

function abc(a, b, ...c) {
    console.log(`a ${a}`);
    console.log(`b ${b}`);
    console.log(c);

}
console.log(abc(1, 2, 3, 4, 4, 5, 5, 6, 76, 7));


function addAllNumber(...number){
    let total = 0;
    for(let numbers of number){
        total = total+numbers;
    }
    return total;

}
console.log(addAllNumber(1,3,43,34,43,34,4,4),"sum of all these");