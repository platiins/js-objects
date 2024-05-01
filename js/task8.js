/*
Create an object with properties. 
These properties cannot be deleted
*/

const myDog = {
  name: "Otiss",
  age: 3,
  breed: "mixed",
  color: "black, brown and white",
};

Object.seal(myDog);

// to test:

delete myDog.age;

console.log(myDog);
