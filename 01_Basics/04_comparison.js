// console.log(2 > 1);
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* 
The reason here is that an equality check == and comparison check > < >= <= work differently.
Comparison convert null to a number, treating it as 0, Thats why (3) num >=0 is true and (1) null > 0 is false
*/

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0);
// Comparison with undefined will always give false


console.log("2" === 2);
console.log(2 === 2)


// === is called a strict check. == may convert the values to other datatypes. But === will always do a strict check on whether the two values are equal for real!!! 
