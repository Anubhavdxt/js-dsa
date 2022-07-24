// Quick Sort
/*
 * PIVOT
    - 1st el
    - Last el
    - Random el
    - Median el
 * Put everything less than pivot into leftArr and greater into rightArr
 * Repeat the process for the individual arrays until the length of array becomes 1
 * Repeatedly concatenate leftArr, pivot and rightArr till one sorted array remains
 */

// Worst Case - O(n²) --> When the array is sorted
// Average Case - O(nlogn)

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log(quickSort([-6, 20, 8, 2, -4]));
