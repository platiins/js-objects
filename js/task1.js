/*
Create an object that describes a car (manufacturer, model, year of release, average speed) 
and the following methods for working with this object:

- a method that displays the car info 

- a method for counting a time frame necessary to cover a given distance with the average speed. 
Note that every 4 hours the driver has to take a 1-hour break.
*/

const carManufacturer = prompt("please enter the car manufacturer:");
const carModel = prompt("please enter the car model:");
const carReleaseYear = Number(prompt("please enter the car release year:"));
const carAverageSpeed = Number(
  prompt("please enter the car average speed (km/h):")
);
const distanceToCover = Number(
  prompt("please enter the distance you need to cover by this car (km):")
);

const car = {
  manufacturer: `${carManufacturer}`,
  model: `${carModel}`,
  yearOfRelease: `${carReleaseYear}`,
  averageSpeed: `${carAverageSpeed}`,
  bio() {
    console.log(`INFO ABOUT CAR: 
    manufacturer: ${this.manufacturer};
    model: ${this.model};
    year of release: ${this.yearOfRelease};
    average speed: ${this.averageSpeed};`);
  },
  timeToCoverDistance() {
    let timeWithoutBreaks = distanceToCover / carAverageSpeed;
    let breaksAmount = parseInt(timeWithoutBreaks / 4);
    let totalTime;

    if (breaksAmount === 0) {
      totalTime = timeWithoutBreaks;
    } else {
      totalTime = breaksAmount * 1 + timeWithoutBreaks;
    }

    return console.log(
      `you need ${totalTime} hours to cover ${distanceToCover} km by this car`
    );
  },
};

// method that displays the car info
car.bio();

// method for counting a time frame necessary to cover a given distance
car.timeToCoverDistance();
