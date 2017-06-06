function VehicleConstructor(name, numWheels, numPassengers){
	var vehicle = {};
	vehicle.name = name;
	vehicle.numWheels = numWheels;
	vehicle.numPassengers = numPassengers;
	vehicle.makeNoise = () => {
		if (name.toLowerCase() == "bike") {
			console.log("ring ring!!");
		}
		if (name.toLowerCase() == "sedan") {
			console.log("honk honk!!");
		}
	}
	return vehicle;
}

// Create an object
v1 = VehicleConstructor("Bike",2,0);
// Print some values
console.log(v1.name);
console.log("There are",v1.numWheels,"wheels");
console.log("This vehicle can hold",v1.numPassengers,"passengers");
// Run some methods on that object
v1.makeNoise();

// Create another object
v2 = VehicleConstructor("Sedan",4,5);
console.log(v2.name);
console.log("There are",v2.numWheels,"wheels");
console.log("This vehicle can hold",v2.numPassengers,"passengers");
v2.makeNoise();

// Create another object
v3 = VehicleConstructor("Bus",8,20);
console.log(v3.name);
console.log("There are",v3.numWheels,"wheels");
console.log("This vehicle can hold",v3.numPassengers,"passengers");
