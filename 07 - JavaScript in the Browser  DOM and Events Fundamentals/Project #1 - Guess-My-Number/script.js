'use strict';

// querySelector => select element
// textContent => to get property
// console.log(document.querySelector('.message').textContent);


// // textContent = to change the content of the element
// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // value = to read the value element
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;


// to store the score
let score = 20;

// to store the high score
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// eventListener => wait for a certain of event to happen, than react to it
// to define what should do, using function
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');


        // when player is win
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number! 🎉';
        displayMessage('Correct Number! 🎉');

        document.querySelector('.number').textContent = secretNumber;

        // to change the color of background
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        // to check is highest score or not
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High! ' : '📉 Too Low! ';
            displayMessage(guess > secretNumber ? '📈 Too High! ' : '📉 Too Low! ');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game! ';
            displayMessage('💥 You lost the game! ');
            document.querySelector('.score').textContent = 0;
        }
        // } else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📈 Too High! ';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '💥 You lost the game! ';
        //         document.querySelector('.score').textContent = 0;
        //     }


        //     // when guess is too low
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📉 Too Low! ';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '💥 You lost the game! ';
        //         document.querySelector('.score').textContent = 0;
        //     }
    }


    // ========== CHALLENGES ==========

    // Implement a game rest functionality, so that the player can make a new guess!
    // Your tasks:
    // 1. Select the element with the 'again' class and attach a click event handler
    // 2. In the handler function, restore initial values of the 'score' and 
    // 'secretNumber' variables
    // 3. Restore the initial conditions of the message, number, score and guess input 
    // fields
    // 4. Also restore the original background color (#222) and number width (15rem)
    // GOOD LUCK �    

    // ANSWER
    document.querySelector('.again').addEventListener('click', function () {
        score = 20
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').textContent = '';
    })
});