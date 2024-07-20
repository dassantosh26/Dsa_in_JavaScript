/** @format */

//Sets are particularly useful when you need to maintain a collection of unique values and quickly check for the existence of an item without worrying about duplicates.

//Creating a Set

const mySet = new Set();

//Adding  Elements

mySet.add(66);
mySet.add(22);
mySet.add(10);
mySet.add(26);
mySet.add(34);

console.log(mySet); // Set(5) { 66, 22, 10, 26, 34 }

//removing Elements

mySet.delete(10);

console.log(mySet); // Set(4) { 66, 22,26, 34 }

// Creating a set from an array
let myArray = [1, 2, 3, 4, 5];
let mySetFromArray = new Set(myArray);
console.log(myArray);

//Checking if an Element Exists

let mydata = new Set([1, 2, 3]);

console.log(mydata.has(2)); // true
console.log(mydata.has(4)); // false

//Set Size

console.log(mydata.size); //3

//Iterating Over a Set

let mySet1 = new Set([1, 2, 3]);

// Using for...of loop
for (let item of mySet1) {
  console.log(item);
}
//or

// Using forEach method
mySet1.forEach((item) => {
  console.log(item);
});

//Converting Set to Array

let mySet2 = new Set([1, 2, 3]);
let myArray2 = Array.from(mySet2);
// or
let myArray3 = [...mySet];

console.log(myArray); // [1, 2, 3]
console.log(myArray3); // [1, 2, 3]

// Removing duplicate elements (Important UseCase)

const nums = [22, 33, 5, 4, 22, 5, 6, 1, 2, 33, 44];
const uniqueNums = new Set(nums);
console.log(uniqueNums); // Set(8) { 22, 33, 5, 4, 6, 1, 2, 44 }
// if we want above result in array
const numsInArray = [...new Set(nums)];
console.log(numsInArray); //[ 22,33,5, 4,6,  1, 2, 44]
