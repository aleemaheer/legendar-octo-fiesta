const currentDate = new Date();

// const currentDayOfMonth = currentDate.getDate();
// const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
// const currentYear = currentDate.getFullYear();

// const dateString =
// 	currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
// // "27-11-2020"
// console.log(dateString);
// console.log(currentDate.getTime() / 1000);

// Get timeStamp

// var unixTimestamp = Math.round(currentDate.getTime() / 1000); // convert to unixtimestamp
// console.log(currentDate.getTime());
// unixTimesstamp = unixTimestamp - 180;
// console.log(unixTimestamp * 1000);

// unixTimestamp += 120; // added 2 min
// date = new Date(unixTimestamp * 1000); // again convert to date
// console.log(date); // got your solution.

const time = Math.floor(new Date().getTime()); // This will return time in milliseconds
twoMinuteAgo = time - 120000;
console.log(twoMinuteAgo);

// 3600000

// Save the current time, and when again come, get the current time, subtract 2 minutes and compare
