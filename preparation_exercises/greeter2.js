let rlSync = require("readline-sync");

let firstName = rlSync.question("What is your first name? ");
let secondName = rlSync.question("What is your last name? ");
console.log(`Hello, ${firstName + " " + secondName}!`);
