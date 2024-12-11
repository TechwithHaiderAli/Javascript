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


// When you don't know num of parameters
// we use rest operators

function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500));


const user={
    username:"haider",
    price:999,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)

handleObject({
    username:"Sam",
    price:200,
})

//Passing Arrays to functions

const MyArray=[1,2,3,34,5,5]

function return2ndValue(MyArray){

    return MyArray[4]
}

//console.log(return2ndValue(MyArray));
console.log(return2ndValue([1,2,3,45,50,56]));
