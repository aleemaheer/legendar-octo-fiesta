const md5 = require("md5");

const password = "12345678";
const hashedPassword = md5(password);

if (md5(password) === hashedPassword) {
	console.log("password matched");
}

var myObject = {
	ircEvent: "PRIVMSG",
	method: "newURI",
	regex: "^http://.*",
};
delete myObject.regex;

console.log(myObject);
