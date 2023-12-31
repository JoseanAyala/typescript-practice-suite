// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

export default function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

// More than N time complexity. Not good enough
export function twoSumBad(numbers: number[], target: number): number[] {
  let head = 0;
  while (head < numbers.length) {
    let current = head + 1;

    while (current < numbers.length) {
      if (numbers[head] + numbers[current] > target) break;
      if (numbers[head] + numbers[current] === target)
        return [head + 1, current + 1];

      current++;
    }
    head++;
  }

  return [];
}

//console.log(twoSum([2, 3, 4], 6));
