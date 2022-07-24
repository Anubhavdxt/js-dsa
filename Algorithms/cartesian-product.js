// Cartesian product of two sets - O(m*n)

function cartProd(arr1, arr2) {
  const res = [];
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      res.push([el1, el2]);
    }
  }
  return res;
}

const arr1 = [1, 2];
const arr2 = [8, 9, 0];

console.log(cartProd(arr1, arr2));
