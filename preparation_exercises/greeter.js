// let name = "Victor";

// function greet(name) {
// 	console.log(`Good Morning, ${name}.`);
// 	console.log(`Good Afternoon, ${name}.`);
// 	console.log(`Good Evening, ${name}.`);
// }

// greet(name);

// function greeter(first, lastName) {
// 	first = prompt("What is your first name?");
// 	lastName = prompt("What is your last name?");
// 	alert(`Welcome and salutations ${first} ${lastName}`);
// }

// greeter();

// function getName(prompt) {
// 	let readlineSync = require("readline-sync");
// 	let name = readlineSync.question(prompt);
// 	return name;
// }

// let firstName = getName("What is your first name? ");
// let lastName = getName("What is your last name? ");
// console.log(`Hello, ${firstName} ${lastName}!`);

function getnums(prompt) {
	let readlineSync = require("readline-sync");
	let nums = readlineSync.question(prompt);
	return nums;
}

const multiply = (num1, num2) => num1 * num2;

let num1 = Number(getnums("Enter the first number: \n"));
let num2 = Number(getnums("Enter the second number: \n"));
console.log(multiply(num1, num2));
