class Car {
	#name = "Bugati";
	#color = "blue";

	getName() {
		return `The name of car is ${this.name}`;
	}
}

const car = new Car();
console.log(car.name);
