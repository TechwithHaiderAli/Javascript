const accountID = 100
let accountEmail="haider@example.com"
var accountPassword="12345"
accountCity="Lahore"

let accountState;

// accountID=1001//Not Allowed 

accountEmail="hadar@example.com"
accountPassword="54321"
accountCity="Karachi"

/* 

Prefer not to use var because of issue in block scope 
and functional scope


*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
