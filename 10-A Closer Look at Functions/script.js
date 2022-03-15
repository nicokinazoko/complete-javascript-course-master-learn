'use strict';

// // ========== Default Parameter ==========

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1,
//     price = 199 * numPassengers) {

//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2);

// // to set parameter not input
// // using undefined
// createBooking('LH123', undefined, 1000);



// // ========== How Passing Arguments Work: Value vs. Reference ==========

// const flight = 'LH234';
// const nico = {
//     name: 'Nico',
//     passport: 23451432,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 23451432) {
//         alert('Check in');
//     } else {
//         alert('Wrong Passport');
//     }

// }

// // checkIn(flight, nico);
// // console.log(flight);
// // console.log(nico);

// // if primitive type in function just copy a value 
// // if object in function, like copying the object

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// }

// newPassport(nico);
// checkIn(flight, nico);





// ======== First-Class vs Higher-Order Functions ========

// ======== Functions Accepting Callback Functions ========

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...other] = str.split(' ');
//     return [first.toUpperCase(), ...other].join(' ');
// }

// // high order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Tranform string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord);


// // JS uses callbacks all the time
// const high5 = function (){
//     console.log('📈');
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);


// // ======== Functions Returning Functions ========
// // const greet = function (greeting) {
// //     return function (name) {
// //         console.log(`${greeting}, ${name}`);
// //     }
// // }

// // using arrow function
// const greet = greeting => name => {
//     console.log(`${greeting}, ${name}`);
// }


// const greeterHey = greet('Hey');
// greeterHey('Nico');
// greeterHey('Steven');

// greet('Hi')('Nico');


// ======== The Call and Apply Methods ========

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode} ${flightNum}`
        })
    },

};

lufthansa.book(239, 'Nico');
lufthansa.book(636, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// book(23,'Sarah Williams');

// to use function in different object

// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 2393, 'Nico');


// Apply method
// same with call
// doesnt receive keyword but array


const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);


// new
book.call(swiss, ...flightData);


// ======== The Bind Methods ========
// to call function

// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');


const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nico Nico');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value + value * 0.23;

console.log(addVAT(100));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
