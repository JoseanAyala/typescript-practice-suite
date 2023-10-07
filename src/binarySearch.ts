// https://leetcode.com/problems/binary-search

export default function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
