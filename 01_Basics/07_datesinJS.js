//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let newDate = new Date(2023, 0, 23, 5, 3) // Months in javascript starts from 0
// console.log(newDate.toLocaleString());

let newDate = new Date("2023-01-14") // when you specify the date in DD/MM/YY js will start from the specified month
let newDate2 = new Date("01-14-2023")
// console.log(newDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(newDate2.getTime());
console.log(Math.floor(Date.now()/1000)) // convert milliseconds to seconds

let anotherDate = new Date()
console.log(anotherDate.getMonth()); // REMEMBER - Date always starts with 0 in JS
console.log(anotherDate.getFullYear());



const date2 = anotherDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
})



console.log(date2);







