// const tinderUser = new Object() -> singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullName:{
        userFullName:{
            firstName : "Vishakhan",
            lastName : "Pillai"
        }
    }
}

// console.log(regularUser.fullName.userFullName["firstName"])

const obj1 = { 1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}
//const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1,...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:3,
        email:"s@gmail.com"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('nae'));

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor: instructor} = course //De - structuring Objects

console.log(instructor);
