import isValid from "../src/validParentheses";

const testCases = [
  { input: "()", result: true },
  { input: "()[]{}", result: true },
  { input: "(]", result: false },
];

describe("Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.", () => {
  testCases.forEach((testCase, index) => {
    test(`Test case #${index}`, () => {
      const result = isValid(testCase.input);
      expect(result).toBe(testCase.result);
    });
  });
});
