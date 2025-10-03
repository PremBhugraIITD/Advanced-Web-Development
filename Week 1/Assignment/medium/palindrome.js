/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp = str.toLowerCase();
  let s = "";
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] >= "a" && temp[i] <= "z") {
      s += temp[i];
    }
  }
  let a = 0,
    b = s.length - 1;
  while (a <= b) {
    if (s[a] != s[b]) {
      return false;
    }
    a++;
    b--;
  }
  return true;
}
module.exports = isPalindrome;
