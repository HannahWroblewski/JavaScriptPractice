// If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.

// You can test for empty string like this:

// "".length === 0 ➞ true
// Use a regular expression to test for an empty string.

// const REGEXP = /your solution/
// REGEXP.test("") ➞ true -->

// Solution:

const REGEXP = /^$/

// Now, let's break down the regular expression:

// ^: This asserts that the string starts at this point.
// $: This asserts that the string ends immediately after the start, meaning there are no characters in between.
// So, the regular expression /^$/ essentially matches a string that has nothing between its start and end,
//  which is an empty string.
