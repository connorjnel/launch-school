// let counter = 1;

// while (counter <= 10) {
// 	console.log(counter);
// 	counter += 1;
// }

// let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor the Assassin"];
// let upperNames = [];
// let index = 0;

// while (index < names.length) {
// 	let upperCaseName = names[index].toUpperCase();
// 	upperNames.push(upperCaseName);
// 	index += 1;
// }

// console.log(upperNames);

// let answer;
// do {
// 	answer = prompt("Do you want to do that again?");
// } while (answer === "yy");

// let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor the Assassin"];
// let upperNames = [];

// for (let index = 0; index < names.length; index += 1) {
// 	if (names[index] !== "Naveed") {
// 		let upperCaseName = names[index].toUpperCase();
// 		upperNames.push(upperCaseName);
// 	}
// }

// console.log(upperNames);

// let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];

// names.forEach((name) => {
// 	console.log(name);
// });

function doubler(number) {
	console.log(number);

	if (number <= 50) {
		doubler(number * 2);
	}
}

doubler(5);
