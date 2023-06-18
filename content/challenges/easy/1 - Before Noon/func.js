// v1 complete

// Check if the time is before noon
// time is in military time 0-24
module.exports = (hour) => {
	if (hour < 12) {
		return true;
	} else {
		return false;
	}
}

console.log(module.exports(0)); // print test for midnight, should rtn true
console.log(module.exports(06)); // print test for 6am, should rtn true
console.log(module.exports(12)); // print test for noon, should rtn false
