function ninjaConstructor(name, cohort){
	console.log("constructing a ninja...");
	var ninja = {};
	ninja.name = name;
	ninja.cohort = cohort;
	belts = ["yellow","red","black"];
	ninja.belt = belts[0];
	ninja.level = 0;
	ninja.levelUp = function(){
		console.log("leveling up",ninja.name);
		if (ninja.level == 0){
			ninja.belt = belts[1];
		}
		if (ninja.level == 1){
			ninja.belt = belts[2];
		}
		if (ninja.level == 2){
			console.log("already a black belt!");
		}
		if (ninja.level < 3){
			ninja.level ++;
		}
		return ninja;
	}
	return ninja;
}

var n1 = new ninjaConstructor("Kris","Silicon Valley");

console.log(n1.name);
console.log(n1.cohort);
console.log(n1.belt);
n1.levelUp();
console.log(n1.belt);




function personConstructor(name){
	console.log("constructing a person...");
	var person = {};
	person.name = name;
	person.distance_traveled = 0;
	person.say_name = function(){
		console.log(person.name);
	},
	person.say_something = function(){
		console.log(person.name," says ",param);
	},
	person.walk = function(){
		console.log(person.name," is walking");
		person.distance_traveled += 3;
		return person;
	},
	person.run = function(){
		console.log(person.name," is running");
		person.distance_traveled += 10;
		return person;
	},
	person.crawl = function(){
		console.log(person.name," is crawling");
		person.distance_traveled += 1;
		return person;
	}
	return person;
}


// var p1 = new personConstructor("Kristopher");
// var p2 = new personConstructor("Jason");

// console.log(p1.name);
// console.log(p1.distance_traveled);
// p1.walk().walk().run();
// console.log(p1.distance_traveled);
// console.log(p2.name);










