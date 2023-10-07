// https://leetcode.com/problems/search-a-2d-matrix/

export default function searchMatrix(
  matrix: number[][],
  target: number
): boolean {
  let lowRow = 0;
  let highRow = matrix.length - 1;

  while (lowRow <= highRow) {
    const midRow = Math.round((lowRow + highRow) / 2);
    const row = matrix[midRow];

    // Search in row
    if (row[0] === target || row[row.length - 1] === target) return true;
    if (row[0] < target && row[row.length - 1] > target) {
      return binarySearch(row, target);
    }

    // Look for another row.
    if (row[0] > target) {
      highRow = midRow - 1;
    } else {
      lowRow = midRow + 1;
    }
  }
  return false;
}

function binarySearch(row: number[], target: number): boolean {
  let low = 0;
  let high = row.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);

    if (row[mid] === target) return true;
    if (row[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}
