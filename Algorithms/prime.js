// Prime Number

// Time Complexity - O(n)
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Time Complexity - O(sqrt(n))
function isPrimeOptimal(n) {
  if (n < 2) return false;
  //   for (let i = 2; i < n; i++)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrimeOptimal(3));

// Integers larger than the square root don't need to be checked cuz,
// whenever n = a * b
// Either one of 'a' or 'b' will be less than or equal to the square root of 'n'
