// 1. Loose Equality (==): Compares values after type coercion
let result1 = 5 == '5';  // true, because '5' is coerced to a number
console.log("Loose Equality (5 == '5'):", result1);

// 2. Strict Equality (===): Compares both value and type without type coercion
let result2 = 5 === '5'; // false, because one is a number and the other is a string
console.log("Strict Equality (5 === '5'):", result2);

// 3. Loose Inequality (!=): Checks if values are not equal after type coercion
let result3 = 5 != '5'; // false, because '5' is coerced to a number
console.log("Loose Inequality (5 != '5'):", result3);

// 4. Strict Inequality (!==): Checks if values are not equal in both value and type
let result4 = 5 !== '5'; // true, because one is a number and the other is a string
console.log("Strict Inequality (5 !== '5'):", result4);

// 5. Greater Than (>): Checks if left value is greater than right value
let result5 = 10 > 5;  // true, because 10 is greater than 5
console.log("Greater Than (10 > 5):", result5);

// 6. Less Than (<): Checks if left value is less than right value
let result6 = 3 < 8;   // true, because 3 is less than 8
console.log("Less Than (3 < 8):", result6);

// 7. Greater Than or Equal To (>=): Checks if left value is greater than or equal to right value
let result7 = 10 >= 5; // true, because 10 is greater than or equal to 5
console.log("Greater Than or Equal To (10 >= 5):", result7);

// 8. Less Than or Equal To (<=): Checks if left value is less than or equal to right value
let result8 = 3 <= 5;  // true, because 3 is less than or equal to 5
console.log("Less Than or Equal To (3 <= 5):", result8);

// 9. Object Comparison (Reference Equality): Checks if two objects refer to the same location in memory
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1; // obj3 refers to the same object as obj1

let result9 = obj1 === obj2; // false, because obj1 and obj2 are different objects in memory
console.log("Object Comparison (obj1 === obj2):", result9);

let result10 = obj1 === obj3; // true, because obj1 and obj3 refer to the same object
console.log("Object Comparison (obj1 === obj3):", result10);

// 10. NaN Comparison: NaN is not equal to any value, including itself
let result11 = NaN === NaN;  // false, because NaN is not equal to itself
console.log("NaN Comparison (NaN === NaN):", result11);

// Using Number.isNaN() to correctly check for NaN
let result12 = Number.isNaN(NaN);  // true, correctly checks if the value is NaN
console.log("NaN Check (Number.isNaN(NaN)):", result12);
