var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
string = "hel/lo";

if (format.test(string)) {
	console.log("true");
} else {
	console.log("false");
}
