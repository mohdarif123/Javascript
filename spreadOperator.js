const arr1 = [1,2];
const arr2 = [4,5];

const copyArray = [...arr1,...arr2];
console.log(copyArray,"copyArray");

// can spread string also 

var abc = "sdkfsldfj";
console.log({...abc});
console.log([...abc]);


// spread operator in  Object

const Objec1 = {
name:"delhi",

}
const Object2 = {
    address:"mumbai",
}

const cloneObject = {...Objec1,...Object2,key:"arif"}
console.log(cloneObject,"object Clone")

