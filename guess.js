/* global maxGuesses:true */
/* global numberToGuess:true */
/* global guess:true */
/* global guessesRemaining:true */
/* global numbersGuessed:true */
/* global alreadyUsed:true */
const maxGuesses = 5;
const numberToGuess = 85;
let guess = '';
let guessesRemaining = maxGuesses;
let numbersGuessed = [];
let alreadyUsed = false;
resetGame();

/**
 * Handles validation on guesses.
 *
 * The only input allowed should be numbers, backspace, and enter.
 *
 * @since      0.1.0
 *
 * @fires   checkLength
 *
 * @param {Event}   e	The event keycode that was pressed.
 *
 */
function validateNumber( e ) {
	// backspace: charcode 8
	// 0-9: charcode 48-57
	// Number pad 0-9: charcode 96-105
    var charCode = e.keyCode ?
		e.keyCode :
		e.charCode;
    if ( ! ( charCode >= 48 && charCode <= 57 ) && ! ( charCode >= 96 &&
			charCode <= 105 ) && ( charCode != 8 ) ) {
		return false;
    }
	checkLength();
}

/**
 * Handles number length validation.
 *
 * Numbers should be limited to 4 digits and users should be prevented from entering anything longer than that.
 *
 * @since      0.1.0
 *
 */
function checkLength() {
	if (document.getElementById( 'number-input' ).value.length >= 4) {
		/* If more than 4 digits input, limit it to 4, and update last
		 * digit to most recent input
		 */
		document.getElementById( 'number-input' ).value =
			document.getElementById( 'number-input' ).value.substr( 0, 3 );
		document.getElementById( 'alert' ).innerHTML =
			'The number is limited to 4 digits.';
	}
}

/**
 * Checks if the user guessed the right number or not.
 *
 * @since      0.1.0
 *
 */
function checkGuess() {
	guess = parseInt(document.getElementById( 'number-input' ).value);

	if ( guessesRemaining > 0 ) {
		if ( ! ( isNaN( guess ) ) && guess !== '' ) {
			alreadyUsed = numbersGuessed.includes( guess );
			if ( ! alreadyUsed ) {

				guessesRemaining--;
				document.getElementById( 'alert' ).innerHTML = '<br>';
				numbersGuessed.push( guess );
				document.getElementById( 'numbers-guessed' ).innerHTML =
					'Numbers You\'ve Guessed: ' + numbersGuessed.join(', ');
				document.getElementById( 'guesses-remaining' ).innerHTML =
				 	'Guesses Remaining: ' + guessesRemaining;
				document.getElementById( 'number-input' ).value = '';
				document.getElementById( 'number-input' ).focus();


				if ( numberToGuess === guess  ) {
					document.getElementById( 'alert' ).innerHTML =
						'Congratulations, you guessed it!';
					document.getElementById( 'btn-guess' ).style.display =
						'none';
					document.getElementById( 'btn-play-again' ).style.display =
						'inline';
					document.getElementById( 'btn-play-again' ).focus();

					return;
				}

				if ( 0 === guessesRemaining )  {
					gameOver();
				}
			} else {
				document.getElementById( 'alert' ).innerHTML =
					'You already guessed that number!';
				document.getElementById( 'number-input' ).select();
			} // if ( ! alreadyUsed )



		}
	} // if ( guessesRemaining > 0 )
} // checkGuess()

/**
 * Handles actions to perform when the game is over.
 *
 * @since      0.1.0
 *
 */
function gameOver() {
	//document.getElementById( 'numbers-guessed' ).innerHTML =
		'Numbers You\'ve Guessed: ' + numbersGuessed;
		document.getElementById( 'numbers-guessed' ).innerHTML =
			'Numbers You\'ve Guessed: ' + numbersGuessed.join(', ');
	document.getElementById( 'btn-guess' ).style.display = 'none';
	document.getElementById( 'btn-play-again' ).style.display = 'inline';
	document.getElementById( 'alert' ).innerHTML =
		"Sorry, you don't have any guesses left.  Better luck next time!";
	document.getElementById( 'number-input' ).value = '';
	document.getElementById( 'number-input' ).disabled = true;
	document.getElementById( 'btn-play-again' ).focus();
}

/**
 * Resets everything for a new game.
 *
 * @since      0.1.0
 *
 */
function resetGame() {
	guessesRemaining = maxGuesses;
	numbersGuessed = [];
	guess = '';
	document.getElementById( 'numbers-guessed' ).innerHTML =
		'Numbers Guessed: You haven\'t guessed any numbers yet'
	document.getElementById( 'btn-guess' ).style.display = 'inline';
	document.getElementById( 'btn-play-again' ).style.display = 'none';
	document.getElementById( 'alert' ).innerHTML = '<br>';
	document.getElementById( 'number-input' ).value = '';
	document.getElementById( 'number-input' ).disabled = false;
	document.getElementById( 'number-input' ).focus();
	document.getElementById( 'guesses-remaining' ).innerHTML =
		'Guesses Remaining: ' + guessesRemaining;
}

// Add event listeners
document.getElementById( 'btn-play-again' )
	.addEventListener( 'click', resetGame );
document.getElementById( 'btn-guess' ).addEventListener( 'click', checkGuess );
document.getElementById( 'number-input' )
	.addEventListener( 'keyup', function( event ) {
		event.preventDefault();

	// If the enter key is pressed, register a guess
	if ( 13 === event.keyCode ) {
		document.getElementById( 'btn-guess' ).click();
	}
});
