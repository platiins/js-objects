/*
Create an object circle with a property radius and a method calculateArea. 
The calculateArea method should calculate and return the area of the circle using the formula: area = π * radius^2. 

Now, create another object smallCircle with its own radius, and use the bind method to bind the calculateArea method from circle to smallCircle. 
Call the calculateArea method on smallCircle and print the area.
*/

const pi = 3.14;

// original circle

const ogCircle = {
  r: 5,
  calculateArea() {
    let area = pi * this.r ** 2;
    return area;
  },
};

// small circle

const smallCircle = {
  ...ogCircle,
  r: 3,
};

// original circle area

console.log(`original circle area is ${ogCircle.calculateArea()}`);

// small circle area using bind method

let smallCircleArea = smallCircle.calculateArea;
const execute = smallCircleArea.bind(smallCircle);

console.log(`small circle area is ${execute()}`);
