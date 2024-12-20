const myPromise=new Promise(function(resolve,reject){
    // Do an Async Task
    // DB Calls ,Cryptography
    //Network Calls
    setTimeout(function(){
    console.log("Task Completed")
        resolve()
},1000)

})

// Use Promise
myPromise.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 Resolved");
    
})

new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({username:"hyder",
            email:"something@gmail.com",
        })
    },2000)
   
}).then(function(user){
console.log(user);})