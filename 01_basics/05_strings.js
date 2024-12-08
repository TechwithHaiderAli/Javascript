//Mastering strings in JavaScript involves understanding how they work, different operations you can perform on them, and some useful methods. Here’s a breakdown to help you become proficient with strings://




const name="haider"
const repo=50

console.log(name + repo + "Value");// Not Good Practice

console.log(` Hello my name is ${name} and my repo count is ${repo}`)

// string Length  (Attribute)

let text="hello"
console.log(text.length);
// Acessing Characters in String

let word= "Javascript"
console.log(word[0]);// zero index based
console.log(word.charAt(5));

// Methods

let str="hello"
console.log(str.toUpperCase());
//Converts all the characters into Upper Case
console.log(str.toLowerCase());
//Converts all the characters into Lower Case

let str1 = '   Hello World!   ';
console.log(str1.trim());  // "Hello World!"

let str2 = 'JavaScript';
console.log(str2.slice(0, 4));  // "Java"

let str3 = 'Hello, world!';
console.log(str3.replace('world', 'JavaScript'));  // "Hello,JavaScript!"

let str4 = 'apple,banana,cherry';
let fruits = str4.split(',');
console.log(fruits);  // ["apple", "banana", "cherry"]

let email = 'test@example.com';
let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
console.log(pattern.test(email));  // true

let str5 = 'Hello';
str[0] = 'h';  // This won't work (doesn't change the string).
console.log(str5);  // "Hello" remains unchanged.
