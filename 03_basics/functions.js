// Functions in javascript

function add(num1,num2){
    //result=num1+num2
    //return result
    return num1+num2
}

const res=add(1,2)
console.log("Result :",res);


function loginUser(name){
    if (name===undefined){
        console.log("Please enter username");
        return
        
    }
    ;console.log(
    `${name} just logged in`);

}

const myname="Haider"

loginUser(myname)

// if no argument passed

loginUser()
