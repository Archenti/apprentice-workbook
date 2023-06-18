// v1 complete

// if the number is a multiple of 3, return "Hello"
// if the number is a multiple of 5, return "Tensure"
// if the number is a multiple of both 3 and 5, return "Hello Tensure"
module.exports = (num) => {
	if (num % 5 === 0 && num % 3 === 0) {
		return 'Hello Tensure';
	} else if (num % 5 === 0) {
		return 'Tensure';
	} else if (num % 3 === 0) {
		return 'Hello';
	} else {
		return `${num} is neither a multiple of 3 nor 5`
	}
};


// test condition
console.log(module.exports(6)); // should print Hello
console.log(module.exports(20)); // should print Tensure
console.log(module.exports(15)); // should print Hello Tensure
console.log(module.exports(17)); // should print num is neither a multiple of 3 nor 5