// https://leetcode.com/problems/valid-palindrome/
// Better solution moving in sync until meeting in the middle.

export default function isPalindrome(s: string): boolean {
  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = cleanStr.length - 1;

  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) return false;
    start++;
    end--;
  }

  return true;
}

// Original solution.
export function isPalindromeOriginal(s: string): boolean {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const charArray = cleanString.split("");

  const inverse: string[] = [];
  charArray.forEach((char) => {
    inverse.unshift(char);
  });

  return inverse.join("") === cleanString;
}
