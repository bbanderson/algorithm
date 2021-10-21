# algorithm

## 1. 정렬
정렬 : 어떤 데이터들이 주어졌을 때 이를 정해진 순서대로 나열하는 것
정렬 알고리즘은 여러가지가 있다.  
그렇기 때문에 동일한 문제에 대해 다양한 알고리즘이 고안될 수 있음을 이해하고,  
각 알고리즘 간 성능 비교를 통해 알고리즘 성능 분석에 대해서도 이해할 수 있게 된다.

### 버블정렬 `평균O(n^2) 최악O(n^2) 메모리O(1)`
버블정렬은 배열의 첫 원소부터 순차적으로 진행하며,  
현재 원소가 그 다음 원소의 값보다 크면 그 두 원소의 자리를 바꾸는 작업을 반복한다.
데이터 길이가 N일 때,
1. 인접한 두 수를 비교하기 위한 (N-1)번의 연산
2. 완전히 정렬이 될 때까지 반복 (N-1)번의 연산
이렇게 2가지 연산이 필요하다.

```js
for (let i = 0; i < 데이터길이 - 1; i++) {
  for (let j = 0; j < 데이터길이 - 1; j++) {
    if (앞데이터 > 뒷데이터) {
      swap(앞데이터, 뒷데이터);
    }
  }
}
```

최적화 발상

연산을 거듭할 때마다 맨 끝에는 사이클마다 가장 큰 수가 쌓이게 된다.  
즉 내부 반복문에서는 사이클 횟수만큼 "덜" 순회해도 된다는 뜻이다.

```js
for (let i = 0; i < 데이터길이 - 1; i++) {
  for (let j = 0; j < 데이터길이 - i - 1; j++) {
    if (앞데이터 > 뒷데이터) {
      swap(앞데이터, 뒷데이터);
    }
  }
}
```

더 나아가, 이전 싸이클에서 정렬이 완료되었다면 더 진행할 필요가 없다.  
단 한번도 swap이 일어나지 않으면 정렬이 완료된 것이다.
```js
for (let i = 0; i < 데이터길이 - 1; i++) {
  let isSwapped = false;
  for (let j = 0; j < 데이터길이 - i - 1; j++) {
    if (앞데이터 > 뒷데이터) {
      swap(앞데이터, 뒷데이터);
      isSwapped = true;
    }
  }

  if (!isSwapped) break;
}
```

### 선택정렬 `평균O(n^2) 최악O(n^2) 메모리O(1)`
1. 주어진 데이터 중 최소값을 찾는다.
2. 해당 최소값을 데이터 맨 앞에 위치한 값과 교체한다.
3. 맨 앞의 위치를 뺀 나머지 데이터를 동일한 방법으로 반복한다.

```js
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
```

### 삽입정렬 `평균O(n^2) 최악O(n^2) 메모리O(1)`
1. 두 번째 인덱스부터 시작
2. 해당 인덱스부터 앞쪽으로 이동하면서, 자신보다 더 작은 수가 나타나기 직전까지 swap
```js
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
```