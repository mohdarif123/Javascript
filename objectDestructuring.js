
const object = {
    name: "arif",
    address: "up",
    designation: "softwre engineer",
    location: "india",
}

const obj1 = object.name;
console.log(obj1, "==>obj1")


// es destructuring conpect
const { name, address, designation, ...restArray } = object;
console.log(address, designation, "==>es object destructuring");


// object inside array 

const user = [
    { userId: 1, fistName: "mohd", lastName: "Arif" },
    { userId: 2, fistName: "raj", lastName: "khan" },
    { userId: 3, fistName: "rampal", lastName: "nepali" },
];
console.log(user, "user");

// iterate 
for (let users of user) {
    console.log(users, "iterate of array");
}

// destructuring 

const [user1, user2, user3] = user;
console.log(user1, "user1");

// array of object ma ke value ko access karne ka way

const [{ fistName: firstNameOk }, { lastName }] = user;
console.log(firstNameOk, lastName, "first and last");

