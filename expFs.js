// Node.js program to demonstrate the
// methods to display directory

// Include path module
const path = require("path");

// // Methods to display directory
console.log("__dirname:    ", __dirname);
console.log("process.cwd() : ", process.cwd());
console.log("./ : ", path.resolve("./"));
console.log("filename: ", __filename);
