false || (true && false); // false
true || 1 + 2; // true
1 + 2 || true; // true
true && 1 + 2; // true
false && 1 + 2; // false
1 + 2 && true; // true
32 * 4 >= 129; //false
false !== !true; //false
true === 4; // false
false === (847 === "847"); // true
false === (847 == "847"); // false
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true

const evenOrOdd = (arg) => {
	if (!Number(arg)) {
		console.log("Use a number");
		return;
	}

	if (arg % 2 === 0) {
		console.log("even");
	} else {
		console.log("odd");
	}
};

// evenOrOdd("b");

// return foo() ? "bar" : qux();

// if (foo()) {
// 	return "bar";
// } else {
// 	return qux();
// }

const upperCaseMe = (string) => {
	if (string.length > 10) {
		return string.toUpperCase();
	} else {
		return string;
	}
};

// console.log(upperCaseMe("32df1g32sdfg"));

function numberRange(number) {
	if (number < 0) {
		console.log(`${number} is less than 0`);
	} else if (number <= 50) {
		console.log(`${number} is between 0 and 50`);
	} else if (number <= 100) {
		console.log(`${number} is between 50 and 100`);
	} else {
		console.log(`${number} is greater than 100`);
	}
}

numberRange(-25);
