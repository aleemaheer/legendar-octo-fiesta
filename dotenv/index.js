const fs = require("fs");
const readline = require("readline");
let data = "";
fs.readFile(".env", "utf-8", (err, data) => {
	if (err) {
		console.log(err);
	}
});
//console.log(data);
/*const keys = data.split("=")[0];
	const values = data.split("\n");
	console.log(values);
	console.log(keys);
});
//console.log(data);
/*
const keys = data.split("=")[1];
const line = keys.split("\n")[0];
console.log(keys);
console.log(line);

function getter() {}
*/

const file = readline.createInterface({
	input: fs.createReadStream(".env"),
	output: process.stdout,
	terminal: false,
});

file.on("line", (line) => {
	const keys = line.split("=")[0];
	const values = line.split("\n");
	console.log(values);
	//console.log(keys);
});
