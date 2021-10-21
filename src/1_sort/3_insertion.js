const data = [5, 4, 3, 1, 7, 10, 2, 8, 6, 9];
const data2 = [1, 3, 4, 2, 8, 6, 5, 7];

function insertionSort(data) {
  for (let i = 1; i < data.length; i++) {
    let origin = i;
    while (data[i] < data[i - 1]) {
      let tmp = data[i];
      data[i] = data[i - 1];
      data[i - 1] = tmp;

      i--;
    }
    i = origin;
  }
  return data;
}

const sortedData = insertionSort(data2);
console.log(sortedData);
