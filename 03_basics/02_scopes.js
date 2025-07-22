// let a = 400 // global scope
// if(true){
//     let a = 10
//     const b = 20 //block scope
//     var c = 30
// }

// console.log(a)
// console.log(b);
// console.log(c);


function one(){
    const username = "vishakhan"

    function two(){
        const website = "youtube" 
        console.log(username); //inner function can access the values of its parent function but the parent function cannot access the variables inside its inner function
    }
    // console.log(website);

    two()
}

// one()


// if(true){
//     const username = "vishakhan"
//     if(username === "vishakhan"){
//         const website = "youtube"
//         console.log(username + " " + website);
//     }

//     // console.log(website);
// }

// console.log(username);


// +++++++++++++++++ Interesting +++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


addTwo(5) // this is not gonna work when you create functions as variables.(hoisting)
const addTwo = function(num){
    return num + 2
}


