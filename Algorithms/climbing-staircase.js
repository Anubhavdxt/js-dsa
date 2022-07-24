// Climbing Staircase problem

/**
 * We can only climb 1 or 2 steps at a time
 * To climb 'n' steps, we can only go from either 'n-1' or 'n-2'
 * Calculate the ways to climb to 'n-1' and 'n-2' steps and add both
 * climbStair(n) = climbStair(n-1) + climbStair(n-2)
 */

// By recurrsion - O(nlogn)
function climbStairRec(n) {
  if (n <= 2) return n;
  return climbStair(n - 1) + climbStair(n - 2);
}

// By iteration - O(n)
function climbStair(n) {
  const ways = [1, 2];
  for (let i = 2; i < n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n - 1];
}

console.log(climbStair(1));
console.log(climbStair(2));
console.log(climbStair(3));
console.log(climbStair(4));
console.log(climbStair(5));
