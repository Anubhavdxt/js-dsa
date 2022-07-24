// Binary Search - O(logn)

function binarySearch(arr, t) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (t === arr[mid]) return mid;
    if (t < arr[mid]) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}
arr = [-5, 2, 4, 6, 10];
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 20));

// Recursive Binary Search - O(logn)

function recBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, l, r) {
  if (l > r) return -1;

  let mid = Math.floor((l + r) / 2);

  if (t === arr[mid]) return mid;

  if (t < arr[mid]) return search(arr, t, l, mid - 1);
  else return search(arr, t, mid + 1, r);
}

console.log(recBinarySearch(arr, 10));
console.log(recBinarySearch(arr, 6));
console.log(recBinarySearch(arr, 20));
