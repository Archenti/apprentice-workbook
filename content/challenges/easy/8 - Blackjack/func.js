// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. 
// If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - 
// play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.

module.exports = (cards) => {
   let t = 0;
   // for loop that checks for face cards and gives value of 10 if so, then checks for Aces and gives value of 11 if so
for (i = 0; i < cards.length; i++) {
  if (cards[i] === 'k' || cards[i] === 'q' || cards[i] === 'j' ) {
    cards[i] = 10;
    t += cards[i];
  } else if (cards[i] === 'a') {
     cards[i] = 11;
     t += cards[i];
  } else if (cards[i] >= 2 || cards[i] <= 10) {
    t += cards[i];
  }
}


let j = 0;
 if (1 < 2) {
  for (i = 0; i < cards.length; i++) {
    if (cards[i] === 'a') {
     cards[i] = 1;
     j += cards[i];
  } else if (cards[i] === 'k' || cards[i] === 'q' || cards[i] === 'j' ) {
    cards[i] = 10;
    j += cards[i];
  } else if (cards[i] >= 2 || cards[i] <= 10) {
    j += cards[i];
 } 
} 
}

  
console.log(t);
console.log(j);

};

/*
 if (t > 21) {
  return true;
 } else {
  return false;
 }
*/

console.log(module.exports([6,9,9,'a']));

// steps:
// [X] initialize the array 
// [X] assign j & q & k = 10,
// [] write if statement that checks if array w/ a = 11 is over 21, if so give a A = 1, else A = 11
// [] write if statement that sums the array and rtns true if over 21 else false