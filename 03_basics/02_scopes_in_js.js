
if (true){

    //let a=10

    //const b=20

    var c=30


}

//console.log(a);
//console.log(b);
//console.log(c);

// { }  => Scope


//Nested Scope

function one(){
    const username="haider"

    function two(){
        const website="youtube.com"
        console.log(username);
        
    }

    //console.log(website); error cannot access outside the scope of two
    
    //two()

}
//one()


//----------Interesting---------

addone(5)

function addone(num){

    return num+1

}


// Function Expression
const addtwo=function(num){
    return num+2
}
addtwo(5)