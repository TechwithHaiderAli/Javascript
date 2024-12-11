const userEmail="haider@github"
if (userEmail) {
    console.log("Got your email");

    
}
else{
    console.log("Donot have useremail");
    
}

//empty string  ""--> False
// 0-->false
//-0-->false
//BigInt 0n -->false
//null,undefined -- false
//Nan-->false





//empty array -->true
//1-- true
//"0" true,'false',' ',[array],{object},function(){}


// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1=5 ?? 10  
//val1=null ?? 10

val1=undefined ?? 15
console.log(val1);

//Ternary Operator

//condition ? true : false

const price =100

price>=80 ? console.log(">80"):console.log("<80");

