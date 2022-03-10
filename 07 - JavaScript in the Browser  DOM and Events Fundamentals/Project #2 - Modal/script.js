'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');

// query selector just pick the first one
// to pick all, use querySelectorAll
const buttonOpenModal = document.querySelectorAll('.show-modal');
console.log(buttonOpenModal);

const openModal = function () {
    // console.log('Button Clicked');

    // to remove hidden class
    // using remove
    // dont use .(dot) because the class is already declared
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// to show the modal
for (let i = 0; i < buttonOpenModal.length; i++) {
    buttonOpenModal[i].addEventListener('click', openModal);
}




// if click the 'X' button
buttonCloseModal.addEventListener('click', closeModal);


// to close the modal
// if click outside the modal
overlay.addEventListener('click', closeModal);


// press esc to exit modal
// there is 3 type of key
// 1. key up
// kebalikan key down
// 2. key down
// after press down key
// 3. key press
// press continously
document.addEventListener('keydown', function (event) {

    // console.log(event.key);

    if (event.key === "Escape" && !modal.classList.contains('hidden')) {

        // to check class was hidden or not
        closeModal();
    }
});