/*
Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

-A function for adding two fraction objects.
-A function for subtracting two fraction objects.
-A function for multiplying two fraction objects.
-A function for dividing two fraction objects.
-A function for simplifying a fraction object

*/

// const userNumerator1 = Number(prompt("enter first numerator:"));
// const userDenumerator1 = Number(prompt("enter first denumerator:"));

// const userNumerator2 = Number(prompt("enter second numerator:"));
// const userDenumerator2 = Number(prompt("enter second denumerator:"));

const userNumerator1 = 2;
const userDenumerator1 = 4;

const userNumerator2 = 1;
const userDenumerator2 = 5;

const firstFraction = {
  numerator: userNumerator1,
  denumerator: userDenumerator1,

  fraction() {
    let fractionResult = this.numerator / this.denumerator;
    return Number(fractionResult);
  },
};

console.warn(
  `provided first numerator and first denumerator create ${firstFraction.fraction()} fraction`
);

const secondFraction = {
  ...firstFraction,
  numerator: userNumerator2,
  denumerator: userDenumerator2,
};
console.warn(
  `provided second numerator and second denumerator create ${secondFraction.fraction()} fraction`
);

// function for adding two fraction objects:

function sum() {
  let sumResult = secondFraction.fraction() + firstFraction.fraction();
  return sumResult;
}
console.log(`sum result of these fractions is ${sum()}`);

// function for subtracting two fraction objects:

function subtracting() {
  let subtractingResult;

  if (firstFraction.fraction() === secondFraction.fraction()) {
    subtractingResult = 0;
  } else if (firstFraction.fraction() > secondFraction.fraction()) {
    subtractingResult = firstFraction.fraction() - secondFraction.fraction();
  } else {
    subtractingResult = secondFraction.fraction() - firstFraction.fraction();
  }

  return subtractingResult;
}

console.log(`subtracting result of these fractions is ${subtracting()}`);

// function for multiplying two fraction objects:

function multiplying() {
  let multiplyingResult = firstFraction.fraction() * secondFraction.fraction();
  return multiplyingResult;
}

console.log(`multiplying result of these fractions is ${multiplying()}`);

// function for dividing two fraction objects:

function dividing() {
  let dividingResult = firstFraction.fraction() / secondFraction.fraction();
  return dividingResult;
}

console.log(`dividing result of these fractions is ${dividing()}`);

// function for simplifying a fraction object:

// function simplifying(a, b) {
//   for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) {
//       let divisor = i;
//       let simplyfiedNumerator = a / divisor;

//       console.log(simplyfiedNumerator);
//       let simplyfiedDenumerator = b / divisor;

//       console.log(simplyfiedDenumerator);

//       return `${simplyfiedNumerator} / ${simplyfiedDenumerator}`;
//     }
//   }
// }

// console.log(simplifying(firstFraction.numerator, firstFraction.denumerator));
