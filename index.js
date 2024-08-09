// Task 1: Create an object `person` using an object literal with fields `name: "John"`, `age: 25`
let person = {
  name: "John",
  age: 25
};

console.log("Task 1 ====================================");

console.log("person", person); // Will output {name: "John", age: 25}

// Task 2: Create an object `personLarge` which has the same fields as `person`, 
// and a nested object `address` with fields `street: "123 Main St"`, `city: "New York"`, `country: "USA"`.
let personLarge = {
  ...person,
  address: {
    street: "123 Main St", 
    city: "New York", 
    country: "USA"
  }
};

console.log("Task 2 ====================================");
console.log("personLarge", personLarge); // Will output
// personLarge {
//   name: 'John',
//   age: 25,
//   address: { street: '123 Main St', city: 'New York', country: 'USA' }
// }

// Task 3: Create a function that returns a new object with the same properties as the object passed as an argument.

var animal = {
  type: "Dog",
  breed: "Labrador Retriever",
};

// Function to create a new object with the same properties
function copyObject(obj) {
  let newObject = { ...obj };
  return newObject;
}

console.log("Task 3 ====================================");

console.log("copyObject(animal)", copyObject(animal)); // Will output { type: 'Dog', breed: 'Labrador Retriever' }

// Task 4: Check for the presence of a property in an object using the `in` operator.
let fruit = {
  name: "Banana",
  color: "Yellow",
};

// Function to check the presence of a property in an object
function hasProperty(obj, property) {
  if (property in obj) {
    return `Property "${property}" exists.`;
  } else {
    return `Property "${property}" does not exist.`;
  }
}

console.log("Task 4 ====================================");
console.log(hasProperty(fruit, "name")); // Will output "Property name exists."
console.log(hasProperty(fruit, "taste")); // Will output "Property taste does not exist."

// Task 5: Create a function that takes an object and logs all its keys and values.
let country = {
  name: "United States",
  capital: "Washington, D.C.",
};

// Function to log all keys and values of an object
function printKeysAndValues(obj) {
  for (let key in obj){
    console.log(`Key: ${key}, Value: ${obj[key]}`)
  }
}

console.log("Task 5 ====================================");
printKeysAndValues(country);
// Will output
// Key: name, Value: United States
// Key: capital, Value: Washington, D.C.

// Task 6: Remove a property from an object using the `delete` operator.
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
};

// Function to remove a property from an object
function deleteProperty(obj, property) {
  delete obj[property];
  return obj;
}

console.log("Task 6 ====================================");
console.log(deleteProperty(movie, "director")); // Will output { title: 'Inception' }

// Task 7: Use the `this` keyword in an object.
// Create an object
let user = {
  name: "John",
  age: 25,

  introduce: function(){
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
};

console.log("Task 7 ====================================");
console.log(user.introduce()); // Will output My name is John and I am 25 years old.

// Task 8: Create a function that adds a new field to an object.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
};

// Function to add a new field to an object
function addField(obj, newField, value) {
  obj[newField] = value;
  return obj;
}

console.log("Task 8 ====================================");
console.log(addField(book, "year", 1960)); // Will output { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Task 9: Destructure an object into new variables.
let laptop = {
  brand: "Dell",
  model: "XPS 13",
};

// Function for destructuring an object
function destructureObject(obj) {
  const { brand, model } = obj;
  return `Brand: ${brand}, Model: ${model}`;
}

console.log("Task 9 ====================================");
console.log(destructureObject(laptop)); // Will output Brand: Dell, Model: XPS 13

// Task 10: Change the value of fields in an object within an array of objects.

// Create an array of objects `userList`, with the first element being an object with `name:"Jack"`, `role:"reader"`, 
// and the second object with `name: "Jane"`, `role: 'admin'`

let userList = [
  { name: "Jack", role: "reader" },
  { name: "Jane", role: "admin" },
];

// Function to change the role of all users in the array
function changeRole(array, newRole) {
  for (let user of array){
    user.role = newRole;
  }
  console.log(array);
}

console.log("Task 10 ====================================");
changeRole(userList, "editor");
// Will output
// { name: 'Jack', role: 'editor' }
// { name: 'Jane', role: 'editor' }

// Task 11: Use nested objects to store more complex information.
// Create an object with a nested object
let product = {
  productName: "Smartphone",
  price: 699,
  manufacturer: {
    companyName: "Tech Corp",
    country: "USA",
  },
};

// Function to print product details
function printProductDetails(obj) {
  const { productName, price, manufacturer: { companyName, country } } = obj;
  console.log(productName, price, companyName, country);
}

console.log("Task 11 ====================================");
printProductDetails(product); // Will output Smartphone 699 Tech Corp USA

// Task 12: Show that objects will only be considered equal if one object is assigned the value of another.
// Create two objects `planet1` and `planet2` with fields `name: "Earth"`, `radius: 6371`

let planet1 = { name: "Earth", radius: 6371 };
let planet2 = { name: "Earth", radius: 6371 };

function compareObjects(obj1, obj2) {
  console.log(obj1 === obj2);
  obj2 = obj1;
  console.log(obj1 === obj2);
}

console.log("Task 12 ====================================");
compareObjects(planet1, planet2); // Will output
// false
// true

// Task 13: Use destructuring with default values in function arguments for an object.
let car = {
  brand: "BMW",
  year: 2022,
};

// Create a function that takes an object as an argument and uses destructuring with default values
// Default values: brand = "Unknown", year = 0, country = "Unknown"

function showCarInfo({
  brand = "Unknown",
  year = 0,
  country = "Unknown",
} = {}) {
  return {brand, year, country};
  // Return an object with property values
}

console.log("Task 13 ====================================");
console.log(showCarInfo(car)); // Will output { brand: 'BMW', year: 2022, country: 'Unknown' }

// Task 14: Add a new property to the built-in Array object using a literal.
// Create a function that adds a new property to an array

function addProperty(array) {
  Array.prototype.customProperty = "myProperty";
  return array;
}

console.log("Task 14 ====================================");
let newArr = addProperty([1, 2, 3, 4, 5]);
console.log(newArr.customProperty); // Will output myProperty
