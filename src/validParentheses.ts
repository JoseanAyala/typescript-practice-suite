// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

export default function isValid(s: string): boolean {
  const openStack: string[] = [];

  for (let token of s.split("")) {
    if (token == ")" || token == "}" || token == "]") {
      if (openStack.length === 0) return false;
      if (token === ")" && openStack[0] !== "(") return false;
      if (token === "}" && openStack[0] !== "{") return false;
      if (token === "]" && openStack[0] !== "[") return false;
      openStack.shift();
    } else {
      openStack.unshift(token);
    }
  }
  return openStack.length === 0;
}

export function isValidV0(s: string): boolean {
  const tokens = s.split("");
  const openStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const current = tokens.shift();
    if (!current) return false;

    if (current == ")" || current == "}" || current == "]") {
      if (openStack.length === 0) return false;
      if (current === ")" && openStack[0] !== "(") return false;
      if (current === "}" && openStack[0] !== "{") return false;
      if (current === "]" && openStack[0] !== "[") return false;
      openStack.shift();
    } else {
      openStack.unshift(current);
    }
  }

  return openStack.length === 0 && tokens.length === 0;
}
