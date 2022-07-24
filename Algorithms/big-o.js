// Time complexity: O(n) - Linear

function summation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// Time complexity: O(1) - Constant

function recSummation(n) {
  return (n * (n + 1)) / 2;
}

// Time complexity: O(n²) - Quadratic

function quadratic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
}

// Input size reduces by half every iteration -> Time complexity: O(logn) - Logarithmic
