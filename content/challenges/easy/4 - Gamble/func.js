// v1 complete

// profitable gamble is a game that yields a positive net profit
// net profit is calculated in the following manner: net profit = probaliity * prize - cost of playing
// return true if you think you can win
module.exports = (probabilityOfWinning, prize, costOfPlaying) => {
	netProfit = probabilityOfWinning * prize - costOfPlaying;
	if (netProfit > 0) {
		return true;
	} else {
		return false;
	}
};

console.log(module.exports(.75,40,20));