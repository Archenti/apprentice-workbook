// v1 complete

// You are the cashier at a movie theater
// Only sell tickets under the following condition
// if the customer has enough money for a ticket 8$
// if the movie is not full (true or false)
// if the rating (PG, R) is R and the customer is 17 or older OR a parent is with them

// Return True or False in every situation
module.exports = (customerMoney, isMovieFull, rating, age, isParentWith) => {
	if (customerMoney < 8) {
		return 'Sorry, our movies cost $8. We can\'t admit you at this time.'
	} else if (isMovieFull === true) {
		return 'Sorry, this movie is fully booked. Please check for later showings.'
	} else if (rating === 'R' && age < 17 && isParentWith != true) {
			return 'Sorry buster, no admission! This is an R rated film and you\'re under 17.'
		} else {
			return 'Enjoy the show!'
		}
	};

console.log(module.exports(7,false,'PG',19,true)); // should return 'Sorry, our movies cost $8. We can\'t admit you at this time.'
console.log(module.exports(23,true,'R',19,true)); // should return 'Sorry, this movie is fully booked. Please check for later showings.'
console.log(module.exports(23,false,'R',16,true)); // should return 'Enjoy the show!'
console.log(module.exports(23,false,'R',15,false)); // should return 'Sorry buster, no admission! This is an R rated film and you\'re under 17.'
console.log(module.exports(10,false,'PG-13',19,false)); // should return 'Enjoy the show!'