import search from "../src/binarySearch";

describe("Binary Search", () => {
  it("should return the index of the target element if it exists in the array", () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(search([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should return -1 if the target element does not exist in the array", () => {
    expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(search([1, 2, 3, 4, 5], 0)).toBe(-1);
  });
});
