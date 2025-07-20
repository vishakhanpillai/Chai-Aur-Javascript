//Singleton

//whenever your create an object from a constructor it is made as a singleton
// Object.create -> constructor method


//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vishakhan",
    "full name" : "Vishakhan Pillai",
    [mySym] : "mykey1", // using symbold in objects
    age: 22,
    location: "Kerala",
    email: "vishakhan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // this is the preferred way of accessing object elements because by default js treats each key as a string and suppose if we were to declare a key in double quotes "full name" then this key cannot be accessed using dot(.) operator. 
// console.log(JsUser."full name") -> This is wrong

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // accessing symbols

JsUser.email = "vishakhan@chatgpt.com"
// Object.freeze(JsUser) // making an object change-proof. This will not show any error going forward, but the object cannot be modified further
JsUser.email = "vishakhan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`); // this will refer to the variable inside the current object
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



