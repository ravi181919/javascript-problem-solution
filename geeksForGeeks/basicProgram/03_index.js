/**
 * Question => 
 * JavaScript Program to add Float Numbers.
 * 
 There are various type of solve this => 
    
(1) Using parseFloat() and toFixed() method => easy to understand
(2) Using parseFloat() and Math.round() method => easy to understand 
(3) Using Number() and Intl.NumberFormat method 
*/
const myFirstNumber = 19.7;
const mySecondNumber = 18.009;
console.log(myFirstNumber + mySecondNumber); // 37.709 => prefer to not use

// (1) Using parseFloat() and toFixed() method =>
// Given two or more numbers, to sum up the float numbers.
// Use parseFloat() and toFixed() method to format the output accordingly.

// By using Es5 =>
function addFloatNumberByEs5(myFirstNumber, mySecondNumber) {
  return Number(
    (parseFloat(myFirstNumber) + parseFloat(mySecondNumber)).toFixed(2)
  );
}
const valueOfaddFloatedNumberByEs5 = addFloatNumberByEs5(
  myFirstNumber,
  mySecondNumber
);
console.log(valueOfaddFloatedNumberByEs5); // Output => 37.71

// By using Es6 =>
const addFloatNumberByEs6 = (myFirstNumber, mySecondNumber) => {
  return Number(
    (parseFloat(myFirstNumber) + parseFloat(mySecondNumber)).toFixed(2)
  );
};
const valueOfaddFloatedNumberByEs6 = addFloatNumberByEs6(
  myFirstNumber,
  mySecondNumber
);
console.log(valueOfaddFloatedNumberByEs6); // Output => 37.71

// (2) Using parseFloat() and Math.round() method =>
// Given two or more numbers, to sum up the float numbers.
// Use parseFloat() and Math.round() method to get the desired output.

// By using Es5 =>
function secondMethodAddFloatNumberByEs5(myFirstNumber, mySecondNumber) {
  return Number(
    Math.round((parseFloat(myFirstNumber) + parseFloat(mySecondNumber)) * 100) /
      100
  );
}
const secondMethodValueOfaddFloatedNumberByEs5 =
  secondMethodAddFloatNumberByEs5(myFirstNumber, mySecondNumber);
console.log(secondMethodValueOfaddFloatedNumberByEs5); // Output => 37.71

// By using Es6 =>
const secondMethodAddFloatNumberByEs6 = (myFirstNumber, mySecondNumber) => {
  return Number(
    Math.round((parseFloat(myFirstNumber) + parseFloat(mySecondNumber)) * 100) /
      100
  );
};
const secondMethodValueOfaddFloatedNumberByEs6 =
  secondMethodAddFloatNumberByEs6(myFirstNumber, mySecondNumber);
console.log(secondMethodValueOfaddFloatedNumberByEs6); // Output => 37.71



// (3) Using Number() and Intl.NumberFormat method =>
//  Use Number() to convert strings to floating-point numbers.
//  Use Intl.NumberFormat to format the output accordingly.

// By using Es5 =>
function thirdMethodAddFloatNumberByEs5(myFirstNumber, mySecondNumber) {
    const myValue = new Intl.NumberFormat('en-Us', {minimumFractionDigits : 2, maximumFractionDigits: 2}).format(myFirstNumber + mySecondNumber)
    return Number(myValue)
}
const thirdMethodValueOfaddFloatedNumberByEs5 =
  thirdMethodAddFloatNumberByEs5(myFirstNumber, mySecondNumber);
console.log(thirdMethodValueOfaddFloatedNumberByEs5); // Output => 37.71

// By using Es6 =>
const thirdMethodAddFloatNumberByEs6 = (myFirstNumber, mySecondNumber) => {
  const myValue = new Intl.NumberFormat('en-US', 
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(myFirstNumber + mySecondNumber);

    return Number(myValue);
};
const thirdMethodValueOfaddFloatedNumberByEs6 =
thirdMethodAddFloatNumberByEs6(myFirstNumber, mySecondNumber);
console.log(thirdMethodValueOfaddFloatedNumberByEs6); // Output => 37.71
