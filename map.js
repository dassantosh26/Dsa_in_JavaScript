/** @format */

//In JavaScript, both objects and maps are used for storing collections of data in key value pairs.

//Object===>

//Key Types: Keys must be either strings or symbols. If you attempt to use a non-string or non-symbol key (like a number), it will be converted to a string.
// Uniqueness: Keys must be unique within the object. If you assign a new value to an existing key, it will overwrite the previous value associated with that key.
//Property Order: In modern JavaScript (ES6+), object properties have a specific order of insertion and iteration, which is usually based on the order of property creation. However, this is not guaranteed across all JavaScript engines.
let obj = {
  key1: "value1",
  key2: "value2",
  123: "value3", // number 123 will be converted to string '123'
};

//console.log(obj); // { key1: 'value1', key2: 'value2', '123': 'value3' }

//Map====>

//Key Types: Keys can be of any data type, including objects, functions, and primitives (like strings, numbers, etc.).
// Uniqueness: Each key in a map is unique. If you attempt to add a key that already exists, the new value will overwrite the existing one.
//Order Guarantee: Maps maintain the order of key-value pairs as they are inserted, which means iterating over a map will return key-value pairs in the order they were added.
//Iterability: Maps have built-in methods for iteration (forEach, entries, keys, values) whereas object iteration requires converting keys to an array (Object.keys, Object.values, Object.entries).

//Maps are commonly used in JavaScript for tasks such as counting occurrences of elements in an array, or maintaining a cache of data that can be quickly retrieved using keys. They are flexible and efficient, and provide a simple and intuitive way to store and retrieve data.

let map = new Map();

let key1 = {};
let key2 = {};

map.set(key1, "value1");
map.set(key2, "value2");

//console.log(map.get(key1));  // Outputs: value1
//console.log(map.get(key2));  // Outputs: value2

// Overwriting value for key1
map.set(key1, "new value1");
//console.log(map.get(key1));  // Outputs: new value1

//#######################################################################################//

// Creating a Map

let map2 = new Map();

// Adding key-value pairs

map2.set("name", "Santosh");
map2.set(5, "age");
const keyObj = {};
map2.set(keyObj, "object");
const keyString = "a string";
map2.set(keyString, "This is a string");
const keyFunc = function () {};
map2.set(keyFunc, "Function");

// console.log(map2)

// getting the values

/* console.log(map2.get("name"));
console.log(map2.get(5));
console.log(map2.get(keyString));
console.log(map2.get(keyFunc)); */


//Iterating

const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} => ${value}`);
}
// 0 = zero
// 1 = one

myMap.forEach((value, key) => {
    console.log(`${key} == ${value}`);
});

//Size Tracking
console.log(myMap.size)
 


// Creating a Map
let map4 = new Map();
map4.set('key1', 'value1');
map4.set('key2', 'value2');
map4.set('key3', 'value3');

// Removing Entries
map4.delete('key3');  // Removes the entry with key 'key3'
console.log(map4)
map4.clear();          // Removes all entries from the Map
console.log(map4)

// Checking for Existence of a Key

console.log(map4.has('key1')); //false
console.log(map2.has('name')); //true



//Conversion to and from Arrays

//You can convert a Map to an array of key-value pairs using Array.from(map) or by using the spread operator ([...map]). Similarly, you can initialize a Map from an array of key-value pairs.

let array = [...map2];
let newMap = new Map(array);
console.log(newMap)
