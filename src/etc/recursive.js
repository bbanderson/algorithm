function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  }
  return 1;
}

function f2(num) {
  if (num <= 1) {
    return 1;
  }
  return num * f2(num - 1);
}

// const result = [1, 2, 3, 4, 5].map((v) => f2(v));
// console.log(result);

function sumElements(arr) {
  let target = arr.pop();
  if (!arr.length) return target;
  return target + sumElements(arr);
}

// const result = sumElements([1,2,2,2,2,])
// console.log(result)

/** @param {string} text */
function isPalindrome(text) {
  console.log(text);
  if (text.length === 1) {
    return true;
  }
  if (text[0] === text[text.length - 1]) {
    return isPalindrome(text.slice(1, -1));
  }
  return false;
}

// const result = isPalindrome('levelevelevelevel');
// console.log(result);

function untilOne(num) {
  if (num === 1) {
    return num;
  }
  if (num % 2) {
    console.log(num);
    return untilOne(3 * num + 1);
  } else {
    console.log(num);
    return untilOne(num / 2);
  }
}

// const result = untilOne(3);
// console.log(result);

function threeCombi(num) {
  if (num < 1) return 0;
  if (num === 1) return 1;
  if (num === 2) return 2;
  if (num === 3) return 4;
  return threeCombi(num - 3) + threeCombi(num - 2) + threeCombi(num - 1);
}

const result = threeCombi(3);
console.log(result);
