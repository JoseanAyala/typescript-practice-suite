import maxProfit from "../src/bestTimeToBuy";

const testCases = [
  { input: [7, 1, 5, 3, 6, 4], result: 5 },
  { input: [7, 6, 4, 3, 1], result: 0 },
  { input: [2, 4, 1], result: 2 },
];

export default testCases;

describe(`Return the maximum profit you can achieve from this transaction.`, () => {
  testCases.forEach((testCase, index) => {
    test(`Test case #${index}`, () => {
      const result = maxProfit(testCase.input);
      expect(result).toEqual(testCase.result);
    });
  });
});
