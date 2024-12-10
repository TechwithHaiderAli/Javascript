const myArray=[1,2,3,4,5,6]


const myArray1=['haider','ali']

const myArray2=new Array()

console.log(myArray[0]);

//Array Methods

myArray.push(6)
myArray.push(7)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

// 1. Creating arrays
let arr1 = [1, 2, 3, 4]; // Array with numbers
let arr2 = new Array(5);  // Array with 5 empty slots

// 2. Adding elements
arr1.push(5); // Adds 5 to the end
arr1.unshift(0); // Adds 0 to the beginning
console.log(arr1); // [0, 1, 2, 3, 4, 5]

// 3. Removing elements
arr1.pop(); // Removes 5 from the end
arr1.shift(); // Removes 0 from the beginning
console.log(arr1); // [1, 2, 3, 4]

// 4. Splicing (removing and adding elements)
arr1.splice(1, 1, 6, 7); // Removes 1 element at index 1, adds 6 and 7
console.log(arr1); // [1, 6, 7, 3, 4]

// 5. Slicing (creating a shallow copy)
let newArr = arr1.slice(1, 4); // Copies elements from index 1 to 3
console.log(newArr); // [6, 7, 3]

// 6. Searching for elements
let index = arr1.indexOf(7); // Finds index of element 7
console.log(index); // 1

let found = arr1.includes(4); // Checks if 4 is in the array
console.log(found); // true

// 7. Iterating over arrays
arr1.forEach((element) => console.log(element)); 
// Output: 1, 6, 7, 3, 4
v
let doubled = arr1.map((x) => x * 2); // Creates a new array with each element doubled
console.log(doubled); // [2, 12, 14, 6, 8]

let evenNumbers = arr1.filter((x) => x % 2 === 0); // Filters out even numbers
console.log(evenNumbers); // [6, 4]

// 8. Reducing array to a single value
let sum = arr1.reduce((acc, curr) => acc + curr, 0); // Sums all elements in arr1
console.log(sum); // 21

// 9. Concatenating arrays
let arr3 = [8, 9];
let combined = arr1.concat(arr3); // Combines arr1 and arr3
console.log(combined); // [1, 6, 7, 3, 4, 8, 9]

// 10. Sorting and reversing
arr1.sort((a, b) => a - b); // Sorts in ascending order
console.log(arr1); // [1, 3, 4, 6, 7]

arr1.reverse(); // Reverses the array
console.log(arr1); // [7, 6, 4, 3, 1]

// 11. Checking conditions
let allEven = arr1.every((x) => x % 2 === 0); // Checks if all elements are even
console.log(allEven); // false

let anyEven = arr1.some((x) => x % 2 === 0); // Checks if any element is even
console.log(anyEven); // true

// 12. Filling an array with a value
arr1.fill(0); // Fills the entire array with 0
console.log(arr1); // [0, 0, 0, 0, 0]

// 13. Copying a section of an array
arr1.copyWithin(0, 2); // Copies elements from index 2 to 0
console.log(arr1); // [0, 0, 0, 0, 0]

// 14. Joining array elements into a string
let joined = arr1.join('-'); // Joins array elements into a string with a hyphen
console.log(joined); // "0-0-0-0-0"
