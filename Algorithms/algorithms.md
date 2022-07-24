# Algorithms

## Characteristics of algorithms

- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent

- We evaluate the performance of an algorithm in terms of its input size.
- Time complexity: Amount of time taken by an algorithm to run, as a function of input size.
- Space complexity: Amount of memory taken by an algorithm to run, as a function of input size.
- By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.
- There is no one solution that works every single time.
- It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.
- If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.
- If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

## Asymptotic Notations

1. Big-O Notation (O-notation) -- Worst case complexity
2. Omega Notation -- Best case complexity
3. Theta Notation (⊖-notation) -- Average case complexity

## Algorithm Design Techniques

### Bruce force

- Simple and exhaustive technique that evaluates every possible outcome to find the best
solution.
- Ex: Linear search

### Greedy

- Choose the best option at the current time, without any consideration for the future.
- Ex: Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm 

### Divide and Conquer

- Divide the problem into smaller sub-problems.
- Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution.
- Ex: Binary Search, Quick Sort, Merge Sort and Tower of Hanoi

### Dynamic Programming

- Divide the problem into smaller sub-problems.
- Break it down into smaller but overlapping sub problems.
- Store the result and reuse it for the same sub-problems.
- This is called memoization and is a optimization technique that improves the time complexity of your algorithm.
- Ex: Fibonacci numbers and climbing staircase

### Backtracking

- Generate all possible solutions.
- Check if the solution satisfies all the given constrains and only then you proceed with generating subsequent solutions.
- If the constraints are not satisfied, backtrack and go on a different path to find the solution.
- Ex: N-Queens problem

## Solve more problems

- Finding the GCD using Euclidian algorithm
- Finding permutations and combinations of a list of numbers
- Finding the longest common substring in a given string
- Knapsack problem