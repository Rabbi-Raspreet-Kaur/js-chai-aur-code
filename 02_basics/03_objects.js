//singleton
//object.create

//object literals

const mySym = Symbol("key1")


const JsUser ={
    name: "rabbi",
    "full name": "rabbi raspreet",
    [mySym]: "mykey1",            //  referring as symbol so written in square brackets
    age: 18,
    location: "Jaipur",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]);          // shows string

JsUser.email = "abc@chatgpt.com"
Object.freeze(JsUser)                    //changes above key value i.e. email changes
console.log(JsUser);

