'use strict';
// Define vehicle class with constructor
class Vehicle {
	constructor(name, numWheels, numPassengers, speed) {
		this.name = name || "unicycle";
		this.numWheels = numWheels || 1;
		this.numPassengers = numPassengers || 0;
		this.speed = speed || 0;
		this.distance_traveled = 0;
		var vin = Math.floor(Math.random()*10000000) // makes a random vin for each vehicle
	}
}
// Setup prototype functions
Vehicle.prototype.makeNoise = function() {
	var noise = noise || "honk honk!!";
	console.log(noise);
}
Vehicle.prototype.getDistance = function() {
	return this.distance_traveled;
}
Vehicle.prototype.move = function(dist) {
	if (dist==null) {
		dist = 0;
	}
	this.speed = dist;
	this.makeNoise();
	this.updateDistanceTravelled();
}
Vehicle.prototype.updateDistanceTravelled = function() {
	this.distance_traveled += this.speed;
}
Vehicle.prototype.checkMiles = function() {
	console.log(this.name,"is at",this.getDistance(),"distance");
}
// END prototype functions


// Create an object bike
var bike = new Vehicle("bicycle",2,1,15);

// Give bike a different "makeNoise" function
bike.makeNoise = () => {console.log("ring ring");}

bike.makeNoise();
console.log(bike.distance_traveled);
bike.move(5);
bike.move(7);
bike.move();
bike.checkMiles();
bike.move(-3);
bike.checkMiles();

// Create an object bus
var bus = new Vehicle("bus",8,1,25);


// Give the bus a method for picking up passengers
bus.pickUpPassengers = (numPassengers) => {
	if ((numPassengers == undefined)||(numPassengers == 0)){
		console.log("the bus stops, but no passengers get on");
		return this;
	}
	console.log("the bus stops, and",numPassengers,"passenger(s) get on");
	this.numPassengers += numPassengers;
	return this;
}









