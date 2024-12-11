const user={
    username:"haider",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        
    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()



// Arrow Functions

const chai=() =>{
let username='haider'
console.log(this);
}
chai()

//const addTwo=(num1,num2)=>(num1+num2)//Implicit return
const addTwo=(num1,num2)=>({username:"haider"})//Implicit return

//console.log(addTwo());

const MyArray=[1,2,3,4,5,6]

// MyArray.forEach()
