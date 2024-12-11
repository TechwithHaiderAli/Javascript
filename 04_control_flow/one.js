// IF

//if (conditon){ code....   }

const UserLoggedIn=true

if (UserLoggedIn){

    console.log("Logged in Sucessfully");
    
}
// <,>,<=,>=,== , != , (===,!==   for strict checking )Operators 

const score=200

if (score> 200){
    const power="fly"
    console.log(`User power : ${power}`);

    
}
//console.log(`User power : ${power}`);// Error scope not defined

const balance =1000
if (balance>500) console.log("Test") //Implicit Scope 
//Comma separated for multiple statements

//Now lets take about nesting

if (balance<500) {
    console.log("less than 500");
    
}
else if (balance<750){
console.log("Less than 750");

}
else if (balance<950){
    console.log("Less than 950");
}
else{
    console.log("less than 1200");
    
}

const debitcard=true
const LoggedFromGoogle=false
const LoggedFromEmail=true

if (UserLoggedIn && debitcard) {
    console.log("Allowed to buy course")
}

if (LoggedFromGoogle || LoggedFromEmail) {
    console.log("User Logged In ");
    
}

const month=3 // if string value "3" --> case"3"

switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("Feb");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:

    console.log("Default Case matched");
    
        break;
} 