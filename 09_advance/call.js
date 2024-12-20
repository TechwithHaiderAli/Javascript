// Call and this keyword

function SetUserName(username){
    // Complex DB Calls

    this.username=username

}
function createUser(username,email,password){
    //SetUserName(username) // this will not work function is called and executed but "this" keyword is not properly due to context lost of inner function
    //use call with reference of "this"
    SetUserName.call(this,username)
    this.email=email 
    this.password=password
}

const chai =new createUser("hyder","hyder@zero.com","4455")


console.log(chai);
