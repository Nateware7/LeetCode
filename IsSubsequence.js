// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.







//My Solution

var isSubsequence = function(s, t) {
    let S = s.length;
    let T = t.length;

    if (s === '') return true; // Empty string is always a subsequence
    if (S > T) return false; // s cannot be a subsequence of t if it's longer

    let j = 0; // Pointer for string s

    for (let i = 0; i < T; i++) {
        if (t[i] === s[j]) {
            j++; // Move the pointer in s forward
            if (j === S) return true; // If we've matched all characters in s
        }
    }

    return false; // If we finish the loop without matching all of s
};
