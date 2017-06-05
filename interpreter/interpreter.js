// Assignment: Be the Interpreter

// To understand and write JavaScript code effectively, you need to understand how the 
// interpreter rearranges your code. For each of the following problems rewrite the code 
// to mimic how the interpreter would rearrange it before running. After rearranging 
// the code, predict the output.

// // Problem 1:
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
	first_variable = "Not anymore!!!";
	console.log(first_variable);
}
console.log(first_variable);

// // Solution 1:
var first_variable;
function firstFunc() {
	first_variable = "Not anymore!!!";
	console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

// // Problem 2:
var food = "Chicken";
function eat() {
	food = "half-chicken";
	console.log(food);
	var food = "gone";		// CAREFUL!
	console.log(food);
}
eat();
console.log(food);

// // Solution 2:
var food;
function eat() {
	food = "half-chicken";
	console.log(food);
	var food = "gone";		// CAREFUL!
	console.log(food);
}
food = "Chicken";
eat();
console.log(food);

// // Problem 3:
var new_word = "NEW!";
function lastFunc() {
	new_word = "old";
}
console.log(new_word);

// // Solution 3:
var new_word;
function lastFunc() {
	new_word = "old";
}
new_word = "NEW!";
console.log(new_word);















