/** 
 *  1.Question => 
write a program of js to Make a table generator  =>

 */

// one =>
for (let i = 1; i <= 10; i++) {
  //   console.log(`table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    const table = ` ${i * j}`;
    // console.log(table);
  }
}

// second =>
function tableGenerator(value1, value2) {
  for (let i = value1; i <= value2; i++) {
    console.log(`table of ${i}`);
    for (let j = value1; j <= value2; j++) {
      console.log(i * j);
    }
  }
}
// const myTable = tableGenerator(1, 5);

// three =>
function tableGenerator(value1, value2) {
  for (let i = value1; i <= 10; i++) {
    console.log(`table of ${i}`);
    for (let j = value1; j <= 10; j++) {
      console.log(i * j);
    }
  }
}
// const myNewTable = tableGenerator(3);
