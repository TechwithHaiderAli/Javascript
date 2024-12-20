// ES6

// class User{
//     //Constructor
//     constructor(username,email,password){
//         //Attributes
//         this.username=username
//         this.email=email
//         this.password=password
//     }
    
//     //Methods
//     encryptpassword(){
//         return `${this.password}abc`// heheh
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


const userone=new User("ali","abc@google.com","ttgg")

//console.log(userone.encryptpassword());

//console.log(userone.changeusername());

// Behind the scene

function User(username,email,password){
        this.username=username
        this.email=email
        this.password=password
}

User.prototype.encryptpassword=function(){
    return `${this.username.toUpperCase()}`
}

const usertwo=new User("ali","abc@google.com","ttgg")
console.log(usertwo.encryptpassword());
