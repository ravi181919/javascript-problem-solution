/**
 * Question =>
 * JavaScript Program for Multiplication of Two Numbers
 */

// solution =>

const myFirstNumber = 19;
const mySecondNumber = 18;

// By using Es5 =>
function multiNumberByEs5(myFirstNumber, mySecondNumber) {
  return Number(myFirstNumber * mySecondNumber);
}
const valueOfmultiedNumberByEs5 = addNumberByEs5(myFirstNumber, mySecondNumber);
console.log(valueOfAddedNumberByEs5); // Output => 342

// By using Es6 =>
const multiNumberByEs6 = (myFirstNumber, mySecondNumber) => Number(myFirstNumber * mySecondNumber);
const valueOfmultiedNumberByEs6 = multiNumberByEs6(myFirstNumber, mySecondNumber);
console.log(valueOfmultiedNumberByEs6); // Output => 342
