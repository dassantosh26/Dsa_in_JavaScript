/** @format */

//slice Method
// The slice method creates a new array by extracting a portion of an existing array. It does not modify the original array.
//Syntax
// array.slice(start, end)

// start: The index at which to begin extraction (inclusive). If negative, it indicates an offset from the end of the array.
// end: The index at which to end extraction (exclusive). If omitted, it extracts to the end of the array. If negative, it indicates an offset from the end of the array.

//Example:=>
    
    // 1-Extracting a Portion of an Array

    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice(1, 4); // Extracts elements from index 1 to 3 (4 is not included)
    console.log(newArr); // Output: [2, 3, 4]
    
// 2-Using Negative Indices
    
let arr1 = [7, 5, 3, 4, 6,9];
let newArr1 = arr1.slice(-5, -1); // Extracts elements from index -5 to -1 (excluding -1)
console.log(newArr1); // Output: [ 5, 3, 4, 6 ]

let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr3.slice(-4, -1); // Extracts elements from index -4 to -2 (excluding -1)
console.log(newArr3); // Output: [2, 3, 4]
//Counting from the end:

// -1: 5
// -2: 4
// -3: 3
// -4: 2


//3-Copying an Array
let arr4 = [1, 2, 3, 4, 5];
let copyArr = arr4.slice(); // Creates a shallow copy of the array
console.log(copyArr); // Output: [1, 2, 3, 4, 5]


//Note:
// slice: Creates a new array based on a portion of the original array without modifying it.