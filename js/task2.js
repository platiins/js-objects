/*
Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

-A function for adding two fraction objects.
-A function for subtracting two fraction objects.
-A function for multiplying two fraction objects.
-A function for dividing two fraction objects.
-A function for simplifying a fraction object

*/

// const userNumerator = Number(
//   prompt("please enter the numerator of a fraction:")
// );
// const userDenumerator = Number(
//   prompt("please enter the denumerator of a fraction:")
// );

const fractionObject = {
  numerator: 1,
  denumerator: 4,

  adding2fraction() {
    let fraction = this.numerator / this.denumerator;
    return Number(result);
  },
};

console.log(fractionObject.adding2fraction());
