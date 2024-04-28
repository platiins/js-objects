/*
Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

- a method for displaying the time; 
- a method for changing the time by a given amount of seconds;
- a method for changing the time by a given amount of minutes; 
- a method for changing the time by a given amount of hours;

Note that in the last three methods changing one part may influence another. 
For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

*/

const userHours = Number(prompt("please enter amount of hours:"));
const userMinutes = Number(prompt("please enter amount of minutes:"));
const userSeconds = Number(prompt("please enter amount of seconds:"));

const userIncreasingSec = Number(
  prompt(
    "please enter amount of seconds you want to increase original time by:"
  )
);
const userIncreasingMin = Number(
  prompt(
    "please enter amount of minutes you want to increase original time by:"
  )
);
const userIncreasingH = Number(
  prompt("please enter amount of hours you want to increase original time by:")
);

const originTime = {
  hours: userHours,
  minutes: userMinutes,
  seconds: userSeconds,

  // a method for displaying the time:
  displayTime() {
    const convertHours = String(this.hours).padStart(2, "0");
    const convertMinutes = String(this.minutes).padStart(2, "0");
    const convertSeconds = String(this.seconds).padStart(2, "0");

    return `${convertHours}:${convertMinutes}:${convertSeconds}`;
  },

  // helper method to convert total time to seconds for calculations
  convertingTimeToSeconds() {
    let timeToSeconds;
    timeToSeconds =
      Number(this.hours) * 3600 +
      Number(this.minutes) * 60 +
      Number(this.seconds) * 1;
    return Number(timeToSeconds);
  },

  // a method for changing the time by a given amount of seconds:
  addSeconds() {
    let newTime;
    newTime = this.convertingTimeToSeconds() + userIncreasingSec;

    const hours = parseInt(newTime / 3600);
    newTime %= 3600;

    const minutes = parseInt(newTime / 60);
    newTime %= 60;

    const convertHours = String(hours).padStart(2, "0");
    const convertMinutes = String(minutes).padStart(2, "0");
    const convertSeconds = String(newTime).padStart(2, "0");

    return `${convertHours}:${convertMinutes}:${convertSeconds}`;
  },

  // a method for changing the time by a given amount of minutes:

  addMinutes() {
    let newTime;
    newTime = this.convertingTimeToSeconds() + userIncreasingMin * 60;

    const hours = parseInt(newTime / 3600);
    newTime %= 3600;

    const minutes = parseInt(newTime / 60);
    newTime %= 60;

    const convertHours = String(hours).padStart(2, "0");
    const convertMinutes = String(minutes).padStart(2, "0");
    const convertSeconds = String(newTime).padStart(2, "0");

    return `${convertHours}:${convertMinutes}:${convertSeconds}`;
  },

  addHours() {
    let newTime;
    newTime = this.convertingTimeToSeconds() + userIncreasingH * 3600;

    const hours = parseInt(newTime / 3600);
    newTime %= 3600;

    const minutes = parseInt(newTime / 60);
    newTime %= 60;

    const convertHours = String(hours).padStart(2, "0");
    const convertMinutes = String(minutes).padStart(2, "0");
    const convertSeconds = String(newTime).padStart(2, "0");

    return `${convertHours}:${convertMinutes}:${convertSeconds}`;
  },
};

console.log(`original time: ${originTime.displayTime()}`);
console.log(
  `adding ${userIncreasingSec} sec to original time: ${originTime.addSeconds()}`
);
console.log(
  `adding ${userIncreasingMin} min to original time: ${originTime.addMinutes()}`
);
console.log(
  `adding ${userIncreasingH} h to original time: ${originTime.addHours()}`
);
