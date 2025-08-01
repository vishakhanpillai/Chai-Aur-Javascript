const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // puts two decimal points -> 100 to 100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'))

// +++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(5.5));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.6));
// console.log(Math.sqrt(25));
// console.log(Math.min(4, 3, 6, 1))
// console.log(Math.max(4, 3, 6, 1))

console.log(Math.random()); // returns value between 0 and 1
console.log(Math.floor((Math.random()*10) )+ 1); // did this to get a value greater than 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) //did this to get random values between 10 and 20 (the max an min values)




