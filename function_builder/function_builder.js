function runningLogger(){
	console.log("I am running");
}

function multiplyByTen(num){
	return num*10;
}

// console.log(multiplyByTen(5));

function stringReturnOne(){
	return "This is a first hard-coded string!";
}

function stringReturnTwo(){
	return "A second hard-coded string.";
}

// console.log(stringReturnOne());
// console.log(stringReturnTwo());

// console.log(typeof stringReturnTwo()); // returns "string"
// console.log(typeof stringReturnTwo); // returns "function"

function caller(param){
	if (typeof param == "function"){
		param();
	}
}

// caller(runningLogger);

function myDoubleConsoleLog(p1, p2){
	if ((typeof p1 == "function")&&(typeof p2 == "function")){
		console.log(p1());
		console.log(p2());
	}
}

// myDoubleConsoleLog(stringReturnTwo,stringReturnOne);

function caller2(param){
	console.log("starting");
	var x = setTimeout(function(){
		if (typeof param == "function"){
			console.log("function ran");
			param(stringReturnOne,stringReturnTwo);
		}
	},2000);
	console.log("ending?");
	return "interesting";
}

// caller2(myDoubleConsoleLog);



// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger. 
// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5. 
// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string 
// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned. 
// Medium: Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the function are functions, console.log the value that each function returns when invoked. 
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.




