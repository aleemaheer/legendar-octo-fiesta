class Car {
	#carName = "Bugatti";
	carColor = "Black";
	getName() {
		return `The name of car is ${this.#carName}`;
	}
}

const car = new Car();
console.log(car.getName());
