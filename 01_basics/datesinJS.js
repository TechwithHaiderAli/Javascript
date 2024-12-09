//Date

let myDate=new Date()
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toString());

let myCreatedDate=new Date("01-14-2024")
console.log(myCreatedDate);

let myTimeStamp=Date.now()

console.log(myTimeStamp);
let dateFromTimestamp = new Date(1702100400000); // Timestamp for a specific time
console.log(dateFromTimestamp); // Outputs a date object
let dateFromString = new Date("2024-12-09T12:30:00");
console.log(dateFromString); // Mon Dec 09 2024 12:30:00 GMT+0000 (UTC)
let specificDate = new Date(2024, 11, 9, 12, 30, 0); 
// Month is 0-indexed, so 11 represents December
console.log(specificDate); // Outputs: Mon Dec 09 2024 12:30:00 GMT+0000 (UTC)
let currentDate = new Date();
console.log(currentDate); // Outputs the current date and time
let date = new Date();
console.log(date.getFullYear());  // 2024
console.log(date.getMonth());     // 11 (December)
console.log(date.getDate());      // 9
console.log(date.getDay());       // 1 (Monday)
