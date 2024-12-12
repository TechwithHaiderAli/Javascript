for (let index = 0; index < 10; index++) {
    console.log(index);
}

for (let i = 0; i <=10 ; i++) {
    console.log(`Outer Loop ${i}`);
    
    for (let j = 0; j < 10; j++) {
      console.log(`Inner Loop ${j} and inner loop ${i} `);
      
        
    }
    
}


const myArray=['flash','batman','superman']

for (let index = 0; index <  myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
//console.log(myArray.length);



//break continue


for (let i = 0; i < 10; i++) {
    const element = i
    if (element==5) break;
    console.log(`Value is ${element}`);

    
}