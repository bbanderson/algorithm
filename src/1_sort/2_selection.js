const data = [5, 4, 3, 1, 7, 10, 2, 8, 6, 9];

// function selectSort(data) {
//   for (let i = 0; i < data.length - 1; i++) {
//     let min = data[i];
//     let targetIndex = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < min) {
//         min = data[j];
//         targetIndex = j;
//       }
//     }
//     let tmp = data[i];
//     data[i] = min;
//     data[targetIndex] = tmp;
//   }
//   return data;
// }

// const sortedData = selectSort(data);
// console.log(sortedData);

function selectionSort(data) {
  // 마지막 남은 두 인접한 수는 비교할 필요가 없으므로 반복 횟수를 1 줄인다.
  for (let i = 0; i < data.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j;
      }
    }
    let tmp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = tmp;
  }
  return data;
}
const sortedData = selectionSort(data);
console.log(sortedData);