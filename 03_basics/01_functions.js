function sayMyName() //Function Declaration + Definition
{
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A"); 
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("N"); 
}


// Function decalration referes to the name that you give to the function when you want to identify it. Function Definition refers to the contents inside the function ie telling what the function will do (body of the function)

//sayMyName -> Function reference

//sayMyName() // Function execution

function addTwoNumber(num1, num2 /* Parameters */){ 

    let result = num1 + num2
    return result
}


//addTwoNumber(2, null) // arguments

// Parameters are values that you specify when you are creating the function, arguments are values that you pass when you are calling that function

const result = addTwoNumber(3, 5)
// console.log(`Result is: ${result}`);

function loginUserMessage(username = "vishakhan"){

    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("vishakhan"))

//console.log(loginUserMessage()); // if a function is called without any arguments, it becomes undefined

console.log(loginUserMessage());
