function countPairsWithSum(arr, X) {
  // Initialize variables to keep track of pairs and indices
  let pairCount = 0;
  let left = 0;
  let right = arr.length - 1;

  // Loop until the left index is less than the right index
  while (left < right) {
    const currentSum = arr[left] + arr[right];

    // Check if the current pair sums to X
    if (currentSum === X) {
      pairCount++;
      left++;
      right--;
    } else if (currentSum < X) {
      left++;
    } else {
      right--;
    }
  }

  return pairCount;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const X = 7;
const result = countPairsWithSum(arr, X);
console.log(`Number of pairs with sum ${X} is ${result}`);
