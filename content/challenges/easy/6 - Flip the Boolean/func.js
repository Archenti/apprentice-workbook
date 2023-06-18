// v1 complete

// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given
module.exports = (bool) => {
	if (bool === true) {
		bool = false;
		return bool;
	} else if (bool === false) {
		bool = true;
		return bool;
	} else {
		return 'boolean expected';
	}
};

// test condition
console.log(module.exports(true)); // should rtn false
console.log(module.exports(false)); // should rtn true
console.log(module.exports(9)); // should rtn 'boolean expected'