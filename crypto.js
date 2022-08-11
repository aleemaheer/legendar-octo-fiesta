const crypto = require("node:crypto");

const secret = "abcdefg";
const hash = crypto
	.createHmac("sha256", secret)
	.update("I love cupcakes")
	.digest("hex");
// console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

const newSecret = "abcdefg";
const newHash = crypto
	.createHmac("sha256", newSecret)
	.update("I love cupcakes")
	.digest("hex");

if (hash === newHash) {
	console.log("same" + hash);
} else {
	console.log("not same" + newSecret);
}
