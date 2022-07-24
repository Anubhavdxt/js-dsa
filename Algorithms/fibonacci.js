// Fibonacci Sequence - O(n)
// fib(2) = [0,1]

function fib(n) {
  const res = [0, 1];
  if (n === 0) return -1;
  if (n > 2) {
    for (let i = 2; i < n; i++) {
      res.push(res[i - 2] + res[i - 1]);
    }
  }
  return res.slice(0, n);
}
console.log(fib(3));
