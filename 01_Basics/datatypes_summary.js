// Primitive
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

/* JavaScript is a dynamically typed language. This means that data types of variables are checked during runtime (when the code is executed) rather than at compile time. */

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 2312312343341231n
// console.log(typeof bigNumber);



// Reference Type (Non Primitive)
// Array, Objects, Functions


const drivers = ["HAM", "VER", "NOR"] // arryas

//Objects
let obj = {
    name: "vishakhan",
    age: 22,
}

//Functions
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof drivers); // object as well
console.log(typeof obj); // object
console.log(typeof myFunction); // object function



