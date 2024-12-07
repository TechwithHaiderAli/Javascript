let score="33"
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber );
console.log(valueInNumber)

// "33" => 33
//"33abc" => nan
//true =>1
//false =>0
//null =>0
//undefined=>NaN

//Converting into Boolean
//""=>false
//"something"=>true
// 1 =>true
//0 =>false

//Converting to String
//33 =>"33"
//
let str1="Haider"
let str2=" ALi"

let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log("1"+"2");
console.log(1+"2");
console.log(1+2+"3");
// The precedence applies according to the first value passed
console.log(+true);
console.log(+"");
//+ is used for conversion
//Prefix and Postfix operator
let gameCounter=100

++gameCounter;
console.log(gameCounter);