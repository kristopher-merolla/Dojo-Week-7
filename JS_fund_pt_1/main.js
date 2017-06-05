// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value. 
// Add a new value (100) in the array x using a push method. 
// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now. 
// Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum. 
// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it.
// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it.
// Write a for-in loop that will navigate through an object (call it "newNinja")

var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

// console.log(x);

x.push(100);

// console.log(x);

var y = ["hello", "world", "JavaScript is Fun"];

x.push(y);

// console.log(x);

// the function 'sum_between' will sum all values between a and b (integers, inclusive)
function sum_between(a,b){
	var sum = 0;
	if (a > b){
		for (var i = b; i < a+1; i++){
			sum += i;
		}
	}
	if (a <= b){
		for (var i = a; i < b+1; i++){
			sum += i;
		}
	}
	console.log(sum);
}

// sum_between(1,500);

var arr_1 = [1, 5, 90, 25, -3, 0];

// 'min_val' will return the minimum value in an array
function min_val(arr){
	var min = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	console.log(min);
}

// min_val(arr_1);

// 'avg_val' will return the average value in the array
function avg_val(arr){
	var sum = 0;
	var avg = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	avg = sum/arr.length;
	console.log(avg);
}

// avg_val(arr_1);

var newNinja = {
 name: 'Kristopher Merolla',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Silicon Valley'
}

function object_loop(obj){
	for (key in obj){
		console.log(key, ":", obj[key]);
	}
}

// object_loop(newNinja);
















