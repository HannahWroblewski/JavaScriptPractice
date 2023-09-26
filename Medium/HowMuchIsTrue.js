// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// Solution:
function countTrue(arr) {
    // Initialize a variable to keep track of the count of true values
    let count = 0;
    // Iterate through the array
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === true){
            // If it's true, increment the count
            count++;
        }
    }
    // Return the count of true values
    return count;
  
}