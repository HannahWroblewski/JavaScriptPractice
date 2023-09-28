// The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> ):

// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

// Examples
// shiftToRight(80, 3) ➞ 10

// shiftToRight(-24, 2) ➞ -6

// shiftToRight(-5, 1) ➞ -3

// shiftToRight(4666, 6) ➞ 72

// shiftToRight(3777, 6) ➞ 59

// shiftToRight(-512, 10) ➞ -1
// Notes
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.

// Solution: 

function shiftToRight(x, y) {
	return Math.floor(x / Math.pow(2,y));
}
// We use Math.pow(2, y) to calculate 2^y, which represents the number of times we need to divide x.

// We then divide x by 2^y and use Math.floor() to round down to the nearest integer, as the right shift operation is equivalent to performing floor division by 2^y.

// Alternatively, you can solve this challenge via recursion.
function shiftToRight(x, y) {
    // Base case: If y is 0, return x
    if (y === 0) {
      return x;
    }
  
    // Recursive case: Divide x by 2 and decrement y
    return shiftToRight(Math.floor(x / 2), y - 1);
  }

// In this recursive function:

// We have a base case where if y becomes 0, we return x as it is.

// In the recursive case, we divide x by 2 using Math.floor(x / 2) and decrement y by 1, then call the shiftToRight function recursively with the new values.

// The recursion continues until y becomes 0, at which point the function returns the result, mimicking the right shift operation.