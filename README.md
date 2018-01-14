# javascript-guessing-game-fixed-number
A game to guess how many Minifigs I can fit in a mason jar

## Purpose

The kids and I love LEGO and we have quite a few Minifigs.  I thought it would be fun to have people guess how many I could fit into a Mason jar.  Since this number isn't ever going to change, it's not something they would play over and over again.  I think my site's 404 error page would make a good home for this reason.  That way some people will come across it but [hopefully] not very often.

## Rules
* A single game allows up to 5 turns
* The game is over once a player guesses the correct number of Minifigs or they run out of turns

## What the game should do:
* The number is hard-coded based on how many mini-figs I have in a mason jar.
* Starting with 1, track what turn the player is on
  * If turns are less than or equal to 5, let them guess again
    * Keep track of the numbers the player guessed
    * Display what numbers the player has guessed
    * Check if the guess is correct
      * If it's right:
        * Increment the number of turns
        * Display a message they got it and in how many turns
        * Don't allow any more guesses
        * Allow the player to start over (?)
        * Show a picture of the Minifigs out of the jar
      * If the guess is wrong:
        * Tell them if they are higher or lower than the actual number
        * Repeat the previous steps
  * If guesses are more than 5, the game is over
        * Tell them if they are higher or lower than the actual number
        * Tell them the game is over
        * Don't allow any more guesses
        * Provide an option to play again
