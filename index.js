function largestSubarraySum(array){
  let subArray = [];
  let currentSum = 0;
  let largest = 0;
  array.forEach(i => {
    if (currentSum + i > 0) {
      subArray.push(i);
      currentSum = subArray.reduce((sum, value) => sum + value);
      largest = currentSum > largest ? currentSum : largest;
    } else {
      subArray = [];
      currentSum = 0;
    }
  });
  return largest;
}

largestSubarraySum(array)
