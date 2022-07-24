// Factorial - O(n)

function fact(n) {
  if (n === 0) return 1;
  let res = 1;
  for (let i = n; i >= 1; i--) {
    res *= i;
  }
  return res;
}
console.log(fact(5));

// O(n)
function recFact(n) {
  if (n === 0) return 1;
  else return n * recFact(n - 1);
}

console.log(recFact(5));
