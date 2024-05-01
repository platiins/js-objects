/* 
TASK 4:
Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. 
All of them should have unique ids, ages and addresses.
Show which is the oldest and which is the youngest.
*/

const id = Symbol("id");

let allDogs = [
  {
    name: "John",
    [id]: 118,
    age: 2,
    address: "Riga, Stabu street",
  },

  {
    name: "Ivan",
    [id]: 134,
    age: 1,
    address: "Riga, Gertrudes street",
  },
  {
    name: "Teddy",
    [id]: 256,
    age: 2.5,
    address: "Riga, Terbates street",
  },

  {
    name: "Rocco",
    [id]: 309,
    age: 5,
    address: "Riga, Adminu street",
  },

  {
    name: "Sparky",
    [id]: 227,
    age: 1.5,
    address: "Riga, Klijanu street",
  },
];

console.log(allDogs);

let oldestDog = allDogs[0];
let youngestDog = allDogs[0];

allDogs.forEach((dog) => {
  if (dog.age > oldestDog.age) {
    oldestDog = dog;
  }
  if (dog.age < youngestDog.age) {
    youngestDog = dog;
  }
});

console.log(`Oldest dog: ${oldestDog.name}, id:${oldestDog[id]}`);
console.log(`Youngest dog: ${youngestDog.name}, id:${youngestDog[id]}`);

/* 
TASK 5:
Use the previous objects and show a list with their names and ages.
*/

console.warn("DATABASE:");
console.table(allDogs, ["name", "age"]);
