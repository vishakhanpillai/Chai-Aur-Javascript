//array
const myArr = [0, 1, 2, 3, 4, 5]
const drivers = ["HAM","VER", "NOR"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9)); // checks whether an element exists in an array
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9)); // returns -1 for elements that does not exists in the array

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); //Converts to string

//Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);









