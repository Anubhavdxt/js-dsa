// Power of two or not

// Brute Force - O(n)
function isPowerOfTwoBr(n) {
  let i = 0;
  let res = 0;
  while (res <= n) {
    if (res === n) return true;
    else res = Math.pow(2, i++);
  }
  return false;
}

// Good - O(logn)
function isPowerOfTwoGd(n) {
  while (n % 2 === 0) {
    n /= 2;
  }
  if (n === 1) return true;
  return false;
}
console.log(isPowerOfTwoGd(3));

// Optimal - O(1)
function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(3));
