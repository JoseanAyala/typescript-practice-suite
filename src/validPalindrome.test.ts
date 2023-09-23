import validPalindrome from "./validPalindrome";

const testCases = [
  { input: "A man, a plan, a canal: Panama", result: true },
  { input: "race a car", result: false },
  { input: " ", result: true },
];

describe("Verify if the passed in string is a palindrome.", () => {
  testCases.forEach((testCase) => {
    test(`${testCase.input} a valid palindrome?`, () => {
      const result = validPalindrome(testCase.input);
      expect(result).toBe(testCase.result);
    });
  });
});
