/**
 * Question no.1 =>
 * JavaScript Program to Add Two Numbers.
 */

// Solution =>

const myFirstNumber = 19;
const mySecondNumber = 18;

// By using Es5 =>
function addNumberByEs5(myFirstNumber, mySecondNumber) {
  return Number(myFirstNumber + mySecondNumber);
}
const valueOfAddedNumberByEs5 = addNumberByEs5(myFirstNumber, mySecondNumber);
console.log(valueOfAddedNumberByEs5); // Output = 37

// By using Es6 =>
const addNumberByEs6 = (myFirstNumber, mySecondNumber) => Number(myFirstNumber + mySecondNumber);
const valueOfAddedNumberByEs6 = addNumberByEs6(myFirstNumber, mySecondNumber);
console.log(valueOfAddedNumberByEs6); // Output = 37
