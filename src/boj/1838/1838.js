const readline = require("../readline");

const input = readline('1838', '1838.txt');
const length = +input[0];
const array = input[1].split(' ').map(v => +v);
let count = 0;
for (let i = 0; i < length; i++) {
  console.log(count)
  count++;
  let flag = 0;
  for (let j = 0; j < length - 1; j++) {
    if (array[j] > array[j+1]) {
      let tmp = array[j];
      array[j] = array[j+1];
      array[j+1] = tmp;
      flag = 1;
    }
  }

  if (flag === 0) break;
}

// console.log(count);