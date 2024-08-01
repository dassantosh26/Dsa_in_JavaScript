//splice Method
// The splice method modifies the original array by adding, removing, or replacing elements. It can change the content and length of the array.
//Syntax:
    // array.splice(start, deleteCount, item1, item2, ...)
 
//start: The index at which to start changing the array. If negative, it indicates an offset from the end of the array.
// deleteCount: The number of elements to remove from the array, starting at the start index. If omitted, all elements from start to the end of the array will be removed.
// item1, item2, ...: Items to add to the array, starting at the start index. If no items are provided, splice will only remove elements.

   // Ex:
// 1.Removing Elements:

let arr = [1, 2, 3, 4, 5,6,7];
arr.splice(2, 4); // Removes 4 elements starting from index 2
console.log(arr); //[1,2,7]

// 2.Adding Elements:

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 0, 'a', 'b'); // Adds 'a' and 'b' at index 2
console.log(arr1); // Output: [1, 2, 'a', 'b', 3, 4, 5]



// 3.Replacing Elements:

let arr2 = [1, 2, 3, 4, 5,6];
arr2.splice(2, 2, 'x', 'y'); // Replaces 2 elements at index 2 with 'x' and 'y'
console.log(arr2); // Output: [1, 2, 'x', 'y', 5,6]


//in  array remove Boy and replace with Banana 

let fruits = ['Apple', 'Boy', 'Cucumber','Mango' ]
fruits.splice(1,1,"Boy")
console.log(fruits);


//Note:
//Splice: Modifies the original array. It can add, remove, or replace elements.