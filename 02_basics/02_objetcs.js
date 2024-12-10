// Today we will learn about Objects in Javascript

//Object literals

//Symbols inside Objects

const sym=Symbol()

const User={
    name:"Haider",
    "full name":"Haider ALi",
    age:19,
    [sym]:"Key",
    location:"Lahore",
    email:"hyder6291@gmail.com",
    isLogged: true,

}
console.log(User.email);
console.log(User["full name"]);

console.log(User[sym]);

User.email="haider@google.com"
console.log(User.email);

//Object.freeze(User) // After this if now you make changes to attributes they will not occur
User.email="hyder@google.com"
console.log(User.email);


console.log(User);

// Declaring Functions inside the objects

User.greeting=function(){
 console.log("Hello Users!");
    
}
console.log(User.greeting());


User.greetingTwo=function(){
    console.log(`Hello from ${this.name}`);
    
}
console.log(User.greetingTwo());
