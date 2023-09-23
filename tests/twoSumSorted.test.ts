import twoSum from "../src/twoSumSorted";

const testCases = [
  {
    input: {
      numbers: [2, 7, 11, 15],
      target: 9,
    },
    result: [1, 2],
  },
  {
    input: {
      numbers: [2, 3, 4],
      target: 6,
    },
    result: [1, 3],
  },
  {
    input: {
      numbers: [-1, 0],
      target: -1,
    },
    result: [1, 2],
  },
];

describe(`Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.`, () => {
  testCases.forEach((testCase, index) => {
    test(`Test case #${index}`, () => {
      const result = twoSum(testCase.input.numbers, testCase.input.target);
      expect(result).toStrictEqual(testCase.result);
    });
  });
});
