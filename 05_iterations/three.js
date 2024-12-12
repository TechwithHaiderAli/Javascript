// for of

const arr=[1,2,3,4,5]

for (const num  of arr) {
    //console.log(num);
    
}

const Greeting = "Hello World!"

for (const greet of Greeting) {
   // console.log(greet);
    
}

// Maps  Unique Key Value Pairs , with Order of insertion

const map=new Map()

map.set('Pak','Pakistan')
map.set('US','United States')
map.set('AUS','Australia')

//console.log(map);

for (const [key,value] of map) {
    console.log(key,value);
    
}

const MyObject={
    'Game1':'NFS',
    'Game2':'DriveClub',
    'Game3':'Uncharted'
}
//for (const [key,value] of MyObject) {
    //console.log(key,value);
 // Not Working   
//}