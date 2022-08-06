const fs = require("fs");

function hi() {
	const data = fs.readFileSync("./public/data/one.json", "utf-8");
	return data;
}

const num = hi();
console.log(num);
