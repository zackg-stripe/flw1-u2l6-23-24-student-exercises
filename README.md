# Lesson 2.6: Objects

## Introduction

In this lesson, you will learn about JavaScript objects. Objects are data structures in JavaScript that allow you to store and organize data in a more meaningful way. You'll use objects to create, access, and update data efficiently.


### Key Concepts

- Objects are created using curly brackets `{}`.
- Objects consist of property-value pairs.
- Properties (keys) must be unique within an object.
- Values can be of various data types.
- Objects can contain arrays and other objects.

### Code Example

```javascript
let classroom = {
  name: "Computer Lab",
  numberOfSeats: 25,
  occupied: true,
  students: ["Emily", "Michael"]
};
```

### Accessing Values

- Dot notation (`object.property`) is used to access specific property values within an object.
- Arrays within objects can also be accessed using dot notation or bracket notation.

### Code Example

```javascript
let character = {
  fullName: "Kirby",
  color: "pink",
  age: 10,
  mood: "cheerful",
  hobbies: ["eating", "sleeping"]
};

// Accessing property values
let characterName = character.fullName; // "Kirby"

// Accessing the first hobby in the array
let firstHobby = character.hobbies[0]; // "eating"
```


### Updating Objects

- Objects can be updated by accessing a property and assigning a new value using the assignment operator (`=`).
- New properties can be added to objects in a similar way.

### Code Example

```javascript
let user = {
  instaTag: "badbunnypr",
  firstName: "Bad",
  lastName: "Bunny",
  followers: 56700000
};

// Updating the "followers" property
user.followers = 56700001;

// Adding a new property
user.numPosts = 15;
```

Happy coding! 😊