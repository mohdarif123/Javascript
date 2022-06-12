// object:- object store key value pairs and object dont have index.

const abc = {
    arif: "mansooori",
    location: "up",
}

// two way to access Object
console.log(abc.arif, "object");
console.log(location["arif"], "object");

const person = {
    name: "arifsss",
    age: 22,
    hobbies: ["volleyball", "ludo", "cricket", "listening music"],
}
const gen = "gender";
person[gen] = "male";
console.log(person, "person");
console.log(person.hobbies, "array");

const newCopyArray = [...person.hobbies];
console.log(newCopyArray, "copy");

console.log("Dont and bracket---------------------->");


const human = {
    village: "bijnor",
    // error show hoiga
    // choice item:["laptop","mobile"]  

    // should pass in string
    "choice item": ["laptop", "mobile"]
}
// show error
// console.log(human.choice item);
console.log(human["choice item"]);

// console.log("how to iterate object");
// two way to iterate
// 1. for in loop
// 2. object.key


const oneMan = {
    name:"arif",
    age:22,
    "person hobbies":["luco","cricket"]
}

for(let key in oneMan){
    console.log(`${key} : ${oneMan[key]}`,"for in loop in object");
}


console.log(typeof Object.keys(oneMan),"object.keys");

for(let key of Object.keys(oneMan)){
    console.log(key ,oneMan[key],"object")
}



