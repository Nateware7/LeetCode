// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.
// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.


// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// Example 2:
// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

// Constraints:
// 1 <= operations.length <= 1000
// operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
// For operation "+", there will always be at least two previous scores on the record.
// For operations "C" and "D", there will always be at least one previous score on the record.

//My Solution

var calPoints = function (operations) {
    const stack = []
    for (let i of operations) {
        if (i === "+") {
            const last = stack[stack.length - 1]
            const secondLast = stack[stack.length - 2]
            stack.push(last + secondLast)
        } else if (i === "D") {
            const last = stack[stack.length - 1]
            stack.push(last * 2)
        } else if (i === "C") {
            stack.pop()
        } else {
            stack.push(parseInt(i))
        }
    }
    return stack.reduce((sum, score) => sum + score, 0)
}