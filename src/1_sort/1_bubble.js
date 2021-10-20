const data = [2, 5, 3, 1, 4];

// O(n^2)
function bubbleSort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        const tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;

        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return data;
}

const sortedData = bubbleSort(data);
console.log(sortedData);
