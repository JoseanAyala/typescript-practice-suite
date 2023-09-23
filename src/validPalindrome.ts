export default function isPalindrome(s: string): boolean {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const charArray = cleanString.split("");

  const inverse: string[] = [];
  charArray.forEach((char) => {
    inverse.unshift(char);
  });

  return inverse.join("") === cleanString;
}

isPalindrome("A man, a plan, a canal: Panama");
