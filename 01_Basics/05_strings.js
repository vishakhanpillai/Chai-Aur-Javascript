const name = "Vishakhan"
const repoCount = 20

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("RainbowSixSeige")

// console.log(gameName.__proto__); // if you want to see the objects


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('6'))

const newString = gameName.substring(0,4) // starting index and till where to go. it to go till 4 then it will  start from the index 0 and go till 3 (0, 1, 2 ,3)
console.log(newString); 


const anotherString = gameName.slice(-1, 4)
console.log(anotherString)

const anotherNewString = "   vishakhan   "
console.log(anotherNewString);
console.log(anotherNewString.trim())




const url = "https://www.topgun.com/pete maverick"


console.log(url.replace(' ', '%20'))


console.log(url.includes("pete"));


const string = "I-feel-the-need-the-need-for-speed"

console.log(string.split('-'));

