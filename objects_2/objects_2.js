function VehicleConstructor(name, numWheels, numPassengers, speed){
	// Public
	this.name = name || "unicycle";
	this.numWheels = numWheels || 1;
	this.numPassengers = numPassengers || 0;
	this.speed = speed || 0;
	this.makeNoise = (noise) => {
		var noise = noise || "honk honk!!";
		console.log(noise);
	}
	this.getDistance = () => {return distance_traveled;}
	this.move = (dist) => {
		this.speed = dist;
		this.makeNoise();
		updateDistanceTravelled();
	}
	this.checkMiles = () => {
		console.log(this.name,"is at",this.getDistance(),"distancet");
	}
	// Private
	var distance_traveled = 0;
	var updateDistanceTravelled = () => {distance_traveled += this.speed;}
	return this;
}

// Create an object bike
var bike = new VehicleConstructor("bicycle",2);
// Give bike a different "makeNoise" function
bike.makeNoise = () => {console.log("ring ring");}

// Create an object sedan
var sedan = new VehicleConstructor("sedan",5);

// Create an object bus
var bus = new VehicleConstructor("bus",8)
// console.log(bus.name);
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
// console.log("the bus currently has",bus.numPassengers,"passengers");
// bus.pickUpPassengers(4); // pick up 4 passengers
// bus.pickUpPassengers(); // pick up no passengers
// bus.pickUpPassengers(1); // pick up 1 passengers
// bus.pickUpPassengers(0); // pic up no passengers
// console.log("the bus currently has",bus.numPassengers,"passengers");

bike.checkMiles();
bike.move(7);
bike.checkMiles();
bus.checkMiles();
bus.move(20);
bus.checkMiles();










