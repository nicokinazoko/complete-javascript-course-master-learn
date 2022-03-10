'use strict';

// selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const score0Element = document.querySelector('#score--0');

// another way
// little bit faster than query selector
const score1Element = document.getElementById('score--1');

// set dice picture hidden
const diceElement = document.querySelector('.dice');

// add current score
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

// add event button
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// to set content
score0Element.textContent = 0;
score1Element.textContent = 0;

// to hide dice
diceElement.classList.add('hidden');

let currentScore = 0;

// store which user is active
const scores = [0, 0];
let activePlayer = 0;


// rolling dice functionality
buttonRoll.addEventListener('click', function () {
    // 1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display the dice
    diceElement.classList.remove('hidden');
    // using src to change source of the picture
    diceElement.src = `dice-${dice}.png`;

    // 3. check for rolled 1; 
    if (dice !== 1) {
        // add dice to the current score
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // // change later
        // current0Element.textContent = currentScore;

    } else {
        // change the score to 0 
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // switch to next player
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;

        // to change the background of player 
        // toggle
        // to add if there is none
        // to remove if there is
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');

    }
});


buttonHold.addEventListener('click', function () {
    // 1. add current score to the score of active player
    scores[activePlayer] += currentScore;
    scores[1] = scores[1];
    // 2. cek the score >= 100
    // finish game

    // switch to the next player
})