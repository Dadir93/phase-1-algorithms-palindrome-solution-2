function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/*
  Pseudocode:
  - Iterate from the beginning of the string to the middle
  - For each letter, compare it with the corresponding letter from the end
  - If any pair of letters doesn't match, return false
  - If the loop completes without returning, all letters match, so return true
*/

/*
  Solution Explanation:
  The function iterates over the first half of the input string, comparing each letter with its corresponding letter from the end of the string. If any pair of letters doesn't match, the function returns false, indicating that the input is not a palindrome. If the loop completes without returning, it means all letters match, and the function returns true, indicating that the input is a palindrome.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
