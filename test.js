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

const arr1 = [1, 2, 3, 4, 5, 6];
const initialValue = 0;
const sum = arr1.reduce((previousValue, currentValue, currentIndex) => {
	previousValue + currentValue, initialValue;
	console.log(currentIndex);
});
console.log(sum);

const printNum = [1, 2, 3, 4, 5].reduce(
	(previousValue, currentValue) => previousValue + currentValue
);

//console.log(printNum);
