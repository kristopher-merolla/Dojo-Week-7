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

function min_val(arr){
	var min = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

function avg_val(arr){
	var sum = 0;
	var avg = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	avg = sum/arr.length;
	return avg;
}

var person = {
	name:"Kristopher Merolla",
	distance_traveled:0,
	say_name: function(){
		console.log(this.name);
	},
	say_something: function(param){
		console.log(this.name," says ",param);
	},
	walk: function(){
		console.log(this.name," is walking");
		this.distance_traveled += 3;
		return person;
	},
	run: function(){
		console.log(this.name," is running");
		this.distance_traveled += 10;
		return person;
	},
	crawl: function(){
		console.log(this.name," is crawling");
		this.distance_traveled += 1;
		return person;
	}
}

person.say_name();
person.say_something("let's do this!");
console.log("let's move around...");
console.log("starting at: ",person.distance_traveled);
person.walk();
console.log("now at: ",person.distance_traveled);
person.walk().crawl();
console.log("now at: ",person.distance_traveled);
person.run();
console.log("now at: ",person.distance_traveled);














