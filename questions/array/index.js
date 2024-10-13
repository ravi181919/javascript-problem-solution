/***
---------------------------------  1.Question => 
write a program of js to get the first n elements of an array. [n can be a positive number] 
for example: [7,9,0,-2] and n = 3
print [7,9,0] 

 */

// simple method  => just for only one
const array = [7, 9, 0, -2];
const myNewArray = array.slice(0, 3);
// console.log(myNewArray); // output =>  [ 7, 9, 0 ]

/* second method =>
program to automatically, remove an array element based on,  elements [n] passed inside as a
parameter when it called
 */

function arr(ar, n) {
  /** method no. 1 */
  //   const createdNewArray = ar.slice(0, n);
  //   return createdNewArray;

  /** method no.2  */
  return ar.slice(0, n);
}

const arrayToSendInsideFunction = [7, 9, 0, -2]; // send a array
const elements = 3;
// const myArrayProgram = arr(arrayToSendInsideFunction, elements);
// const myArrayProgram = arr( [7, 9, 0, -2], 3); // passed values without creating variables

/**
 * ------------------------- 2.Question =>
 * write a program of js to get the first n elements of an array. [n can be a positive number]
 * For example => [7,9,0,-2] and n = 3
 * print [9,0,2]
 */

// first method =>
let arrayOfPositiveNumber = [7, 9, 0, -2];
let lengthOfArray = 3;
console.log(arrayOfPositiveNumber.slice(-lengthOfArray)); // [ 9, 0, -2 ]

// second method => this method automatcally convert passed value
function automatcallyGet(arr, n) {
  return arr.slice(-n);
}
// console.log(automatcallyGet(arrayOfPositiveNumber, lengthOfArray)); // [ 9, 0, -2 ]

/** --------------------------- 3. Question
 * write a program of js to check whether a str is blank or not
 */

// simple method =>
const myStr = "";
let myNewStr;
if (myStr.trim() === "")
  myNewStr =
    "Sorry Given Value is Blank"; // when our str is blank its give a Error type Massage
else myNewStr = myStr.trim(); // when value is exist then its givr value as it is
console.log(myNewStr);

// second method =>
// const valueOfPromte = prompt("Enter Your Name");
let strValueSaver;
function automatcallyStrChecker(str) {
  if (str.trim() === "") return (strValueSaver = "Sorry Given Value is Blank");
  else return (strValueSaver = str.trim());
}
// automatcallyStrChecker(valueOfPromte);

// third method => 
  // if(valueOfPromte.trim() === '') strValueSaver = "Sorry Given Value is Blank"
  // else strValueSaver = valueOfPromte.trim() 


/** --------------- 4. question 
 *  write a program  of js to strip leading and trilling spaces from a string 
 */
// slimply 
const myLocalStr = '  hello  '
console.log(myLocalStr.trim()); // hello

// by functon

const my = (str) => {
  return str.trim()
}
// console.log(my(myLocalStr));// hello


/** 
 * ----------------- 5. question 
 *  to check if an element exists in an array or not 
 *
 */
// sipmle 
const existsArray = [1,2,3,4,5,5,6,7,9]
let elementsExist = 2
// console.log(existsArray.includes((elementsExist))); // true / false

// second method => 
const automatcallyIncludesCheck = (existsArray, elementsExist) => {
  return existsArray.includes(elementsExist)
} 
// console.log(automatcallyIncludesCheck(existsArray, elementsExist)); // true / false


/**
 * -------------- 6. question 
 * to check element exists in an array inside object or not 
 */
let elemExistsInArrInsideObj = 2
const obj = {
  name: 'ar',
  number: [1,2,3]
}
if(Array.isArray(obj['number'])){ // true / fasle 
  console.log('hello', obj['number'].includes(elemExistsInArrInsideObj)); // true / false 
} 
