/*
Create 2 people - Joye and Rachel. 
They have to have age and a greeting which will say:
“Hi, my name is "NAME" and I am "AGE" old. Nice to meet you!”
*/

const personJoye = {
  name: "Joye",
  age: 20,
  greeting() {
    return console.log(
      `Hi, my name is ${this.name} and I am ${this.age} years old. Nice to meet you!`
    );
  },
};

const personRachel = {
  ...personJoye,
  name: "Rachel",
  age: 25,
};

console.log(personJoye.greeting());
console.log(personRachel.greeting());
