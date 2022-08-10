const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("What is your name ? ", (name) => {
	readline.question("Where do you live ? ", (country) => {
		console.log(`${name}, is a citizen of ${country}`);
		readline.close();
	});
});

readline.on("close", function () {
	console.log("\nBYE BYE !!!");
	process.exit(0);
});
