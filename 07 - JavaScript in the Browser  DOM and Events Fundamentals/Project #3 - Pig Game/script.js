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





let currentScore, scores, activePlayer, playing;


// starting conditions
const init = function () {

    currentScore = 0;

    // store which user is active
    scores = [0, 0];
    activePlayer = 0;
    playing = true;

    // to set content
    score0Element.textContent = 0;
    score1Element.textContent = 0;

    current0Element.textContent = 0;
    current1Element.textContent = 0;

    // to hide dice
    diceElement.classList.add('hidden');

    player0Element.classList.remove(`player--winner`);
    player1Element.classList.remove(`player--winner`);
    player1Element.classList.remove(`player--active`);
    player0Element.classList.add(`player--active`);
};

init();


const switchPlayer = function () {
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

// rolling dice functionality
buttonRoll.addEventListener('click', function () {
    if (playing) {
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
            //switch to next player
            switchPlayer();
        }
    }
});


buttonHold.addEventListener('click', function () {
    if (playing) {

        // 1. add current score to the score of active player
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. cek the score >= 100
        if (scores[activePlayer] >= 20) {
            playing = false;
            // finish game
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
            diceElement.classList.add('hidden');
        }

        // switch to the next player
        //switch to next player
        switchPlayer();
    }

});


buttonNew.addEventListener('click', init);