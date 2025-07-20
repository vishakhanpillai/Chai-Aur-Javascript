const marvelHeros = ["Thor", "Iron Man", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros) // this doesnt combine the array instead it pushes the second array as a single element ie array in a array

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]); // since the third element is a single array of its own we can specify additional index along with the index of first array to access the  elements of the array inside an array



// const allHeros = marvelHeros.concat(dcHeros)
//concat will return a new array with elements from both elements in a single array
// console.log(allHeros);

const all_new_heroes = [...marvelHeros,...dcHeros] //spread operator -> does the same function as concat
console.log(all_new_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // flat will spread out to single elements. [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(realAnotherArray);


console.log(Array.isArray("Vishakhan")); //checks if it is an array
console.log(Array.from("Vishakhan")); // converts to array
console.log(Array.from({name: "vishakhan"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // converts multiple variables to a single array




