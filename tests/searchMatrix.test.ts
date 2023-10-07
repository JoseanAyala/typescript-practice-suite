import searchMatrix from "../src/searchMatrix";

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

describe("searchMatrix", () => {
  it("should return true if the target element exists in the matrix", () => {
    expect(searchMatrix(matrix, 3)).toBe(true);
    expect(searchMatrix(matrix, 1)).toBe(true);
    expect(searchMatrix(matrix, 60)).toBe(true);
  });

  it("should return false if the target element does not exist in the matrix", () => {
    expect(searchMatrix(matrix, 13)).toBe(false);
    expect(searchMatrix(matrix, 0)).toBe(false);
    expect(searchMatrix(matrix, 100)).toBe(false);
  });
});
