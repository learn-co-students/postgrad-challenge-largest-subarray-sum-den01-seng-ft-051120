function largestSubarraySum(numbers) {
  let currentMax = 0;
  let runningMax = 0;
  for (let i=0; i<numbers.length; i++) {
    runningMax += numbers[i];
    if (runningMax > currentMax) {currentMax = runningMax};
    if (runningMax < 0) {runningMax = 0};
  }
  return currentMax;
}