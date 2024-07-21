/** @format */

//  Object Creation :

// 1-Literal Notation
let person = {
  name: "John",
  age: 34,
  // string key with boolean value (key with spaces requires quotes)
  "likes ice cream": true,
  address: {
    // object as a value
    city: "New York",
    country: "USA",
  },
  // method (function as a value)
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};
// Accessing object properties

/* console.log(person.name); // Outputs: John
console.log(person["age"]); // Outputs: 30
console.log(person.age); // Outputs: 30
console.log(person.address.city); // Outputs: New York
person.greet(); //  Hello, my name is John.
console.log(person["likes ice cream"]); //true */

//Example Demonstrating Symbol as Object Key

// Creating Symbols
let nameSymbol = Symbol("name");
let ageSymbol = Symbol("age");

// Creating an object with Symbol keys
let person1 = {
  [nameSymbol]: "John",
  [ageSymbol]: 30,
};

// Accessing properties with Symbol keys

/* console.log(person1[nameSymbol]); // Outputs: John
console.log(person1[ageSymbol]); // Outputs: 30 */

//2- Constructor Function

/* function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };
}

let john = new Person("John", 30);
console.log(john);
console.log(john.greet()); */

//3-ES6+ Class Syntax

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

let sam = new Person("Sam", 30);
/* console.log(sam);
console.log(sam.greet());
 */

//Adding and Removing Properties
let person2 = {
  name: "John",
  age: 30,
};
// console.log(person2)
// Adding a new property
person2.city = "New York";
// console.log(person2)

// Removing a property
delete person2.age;
// console.log(person2)

//Iterating Over Object Properties


// 1-for...in Loop

//The for...in loop iterates over all enumerable properties of an object, including properties inherited from its prototype chain. It's important to use hasOwnProperty() to check if the property belongs directly to the object to avoid iterating over inherited properties.

/* for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ':', person[key]);
    }
} */



//2- Using Object.keys() and forEach

//Object.keys() is useful when you only need to work with keys and don't require the values associated with them.

/* Object.keys(person).forEach(function (key) {
  console.log(key + ":", person[key]);
});
 */



//3- Using Object.entries() and forEach

//Object.entries() is beneficial when you need both keys and values, especially for tasks like iterating, transforming data, or converting an object into another form like a Map.

/* Object.entries(person).forEach(function([key, value]) {
    console.log(key + ':', value);
});
 */
//Filtering and Transforming Data:

let salaries = {
    John: 1000,
    Jane: 1500,
    Jim: 1200
};

let highEarners = Object.entries(salaries)
                    .filter(([name, salary]) => salary > 1300)
                    .map(([name, salary]) => ({ name, salary }));

// console.log(highEarners);
// Outputs: [{ name: 'Jane', salary: 1500 }]



//Object Serialization and Deserialization using JSON.stringify() and JSON.parse()

let person4 = {
    name: 'DDDD',
    age: 88
};

// Serialization

let jsonStr = JSON.stringify(person);  // Converts object to JSON string
console.log(jsonStr)


// Deserialization

let personObj = JSON.parse(jsonStr);  // Converts JSON string back to object
console.log(personObj)