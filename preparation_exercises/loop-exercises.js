// Infinite loop created

// let counter = 0;

// while ((counter = 1)) {
// 	console.log(counter);
// 	counter += 1;

// 	if (counter > 2) {
// 		break;
// 	}
// }

// function randomNumberBetween(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;

// do {
// 	result = randomNumberBetween(1, 6);
// 	tries += 1;
// } while (result <= 2);

// console.log("It took " + String(tries) + " tries to get a number greater than 2");

function factorial(number) {
	if (number === 1) {
		return 1;
	}

	return number * factorial(number - 1);
}

console.log(factorial(5)); // => 120
