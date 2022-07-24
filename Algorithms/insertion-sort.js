// Insertion Sort - O(n²)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insert) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = insert;
  }
  return arr;
}

const arr = [8, 20, -2, 4, 6];
console.log(insertionSort(arr));
