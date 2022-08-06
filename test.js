// const fs = require("fs");

// fs.readFile("data.json", "utf-8", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	data = JSON.parse(data);
// 	let targetId = "";
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i].id === 1) {
// 			targetId = i;
// 			break;
// 		}
// 	}
// 	//console.log(targetId);
// 	const foundKey = data.find((item) => item.id === 2);
// 	console.log(foundKey);
// });

// const letters = [
// 	{ value: "v" },
// 	{ value: "w" },
// 	{ value: "x" },
// 	{ value: "y" },
// 	{ value: "z" },
// ];

// // const foundKey = letters.find((item) => item.value === "w");
// // console.log(foundKey);

///////// ----- Get Month Number ---------- /////////
// function getMonthNumber(month) {
// 	const date = new Date(`${month} 1, 2022`);
// 	if (isNaN(date)) {
// 		throw new Error("Invalid month name");
// 	} else {
// 		return date.getMonth() + 1;
// 	}
// }
// console.log(getMonthNumber("cfsd"));

// findIndex()

// const letters = [
// 	{ value: "v", val: "V" },
// 	{ value: "w" },
// 	{ value: "x" },
// 	{ value: "y" },
// 	{ value: "z" },
// ];

// const found = letters.find((item) => item.value === "y");
// const foundIndex = letters.findIndex(
// 	(item) => item.value === "z" && item.value === "gho"
// );

// console.log(found); // { value: 'y' }
// console.log(foundIndex); // 3

// Reduce Method

// const arr1 = [1, 2, 3, 4, 5, 6];
// const initialValue = 0;
// const sum = arr1.reduce((previousValue, currentValue, currentIndex) => {
// 	previousValue + currentValue, initialValue;
// 	console.log(currentIndex);
// });
// console.log(sum);

// const printNum = [1, 2, 3, 4, 5].reduce(
// 	(previousValue, currentValue) => previousValue + currentValue
// );

//console.log(printNum);

//
//
// write a async function to return success message after 3 seconds
// getResponseCallback
// getResponsePromise
// getResponseAsync

async function getResponseAsync() {
	const msg = "success";
	await setTimeout(() => {
		return msg;
	}, 3000);
}

function getResponseCallback(callback) {
	const msg = "success";
	setTimeout(() => {
		callback(null, "Success");
	}, 3000);
}

function getResponsePromise() {
	return new Promise((resolve, reject) => {
		const msg = "success";
		setTimeout(() => {
			return msg;
		}, 3000);
		resolve();
	});
}

getResponseCallback((err, msg) => {
	if (err) {
		console.log(err);
	}
	console.log(msg);
});

//console.log(getResponseAsync());

let names = ["john", "David", "emma", "Zahid"];
names = names.map((name) => {
	return name.toLowerCase();
});
//names.sort();
//console.log(names);
let lower = [];
names.forEach((name) => {
	lower.push(name.toLowerCase());
});
//console.log(lower);

function capitalizeWords(arr) {
	return arr.map((element) => {
		return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
	});
}

// 👇️ ['Hello', 'World']
//console.log(capitalizeWords(["hello", "world"]));

// 👇️ ['One', 'Two', 'Three']
//console.log(capitalizeWords(["one", "two", "three"]));

names = names.map((name) => {
	return name.replace(/emma/gi, "Aleem");
});
console.log(names);
