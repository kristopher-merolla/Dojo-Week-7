'use strict';

class Vehicle {
	// Constructor method to create the Vehicle using "new"
	constructor(name, numWheels, numPassengers, speed) {
		this.name = name || "unicycle";
		this.numWheels = numWheels || 1;
		this.numPassengers = numPassengers || 0;
		this.speed = speed || 0;
		this.distance_traveled = 0;
	}
	// Method (function) definitions
	makeNoise() {
		var noise = noise || "honk honk!!";
		console.log(noise);
	}
	getDistance() {
		return this.distance_traveled;
	}
	updateDistanceTravelled() {
		this.distance_traveled += this.speed;
	}
	move() {
		this.makeNoise();
		this.updateDistanceTravelled();
	}
	checkMiles() {
		console.log(this.name,"is at",this.getDistance(),"distance");
	}
}

let bike = new Vehicle("bicycle",2,1,15);
console.log(bike.name);
console.log(bike.getDistance());
bike.move(); // move once, based on the speed
bike.move(); // move once, based on the speed
console.log(bike.getDistance());











