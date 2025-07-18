let score = "Vishakhan"

//console.log(typeof score) //prints String


let valueInNumber = Number(score)

//console.log(typeof valueInNumber) // prints Number

//console.log(valueInNumber) // prints NaN

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = "Vishakhan"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "vishakhan" => true

let number = 33
let stringNumber = String(number)

// console.log(typeof stringNumber)
// console.log(stringNumber)

// ************************ Operations ************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)

// let str1 = "hello"
// let str2 = " vishakhan"

// let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2) prints 12
// console.log(1 + "2") prints 12
// console.log("1" + 2 + 2) prints 122
// console.log(1 + 2 + "2") 32

// When you specify multiple values of diff datatypes, then javascript will choose the the data type of the first value. ie if the first value is string then, all the other inputs will be considered as string. 
// You can see that for console.log("1" + 2 + 2), the output is 122. This is because, the first value inside console.log ("1") is a string. so js will consider the rest as string and concatenate them.
// But is the first two values are numbers and third is a string, then js will add the first two numbers and concatenate it with the third string
// for example in console.log(1 + 2 + "2") it will print 32

// console.log(+true) //prints 1
// console.log(true+); // gives error

/* 
This way of writing is bad practise

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num1); 

*/





