const rand = () => {
	const rand = Math.random().toString(36).substr(2);
	return rand + rand;
};

console.log(rand());
