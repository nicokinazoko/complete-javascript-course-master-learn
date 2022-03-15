'use strict';

// Data needed for a later exercise
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const [, , , thu, fri, sat] = weekDays;
const hours = {
    [thu]: {
        open: 12,
        close: 22,
    },
    [fri]: {
        open: 11,
        close: 23,
    },
    [sat]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // using ES6 enhanced literals
    // just use variable
    hours,

    // writting method using ES6
    // just using name of method without :
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address
    }) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered 
        to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// restaurant.orderDelivery({
//     time: '22.30',
//     address: 'Via de Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });


// restaurant.orderDelivery({
//     address: 'Via de Sole, 21',
//     starterIndex: 1,
// })



// ======== Destructive Array ========

// // example
// const arr = [2, 3, 4];

// // old way
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// // restaurant 
// // const [first, second] = restaurant.categories;
// // console.log(first,second);

// // to skip element using ' ' (empty)
// const [first, , second] = restaurant.categories;
// console.log(first, second);


// // switch the order
// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // order restaurant
// const [starter, mainCourse] = restaurant.order(2, 0);

// // destruct
// console.log(starter, mainCourse);


// // nested destructuring array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);


// ======== Destructive Object ========

// const {
//     name,
//     openingHours,
//     categories
// } = restaurant;
// console.log(name, openingHours, categories);

// // rename the variable from destruct
// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);


// // default value
// const {
//     menu = [], starterMenu: starters = []
// } = restaurant;

// console.log(menu, starters);


// // mutating variables 
// let a = 111;
// let b = 999;
// const obj = {
//     a: 23,
//     b: 7,
//     c: 14
// };

// ({
//     a,
//     b
// } = obj);

// // nested object
// const {
//     fri: {
//         open: o,
//         close: c
//     }
// } = openingHours;
// console.log(o, c);




// ======== The Spread Operator ========

// const arr = [7, 8, 9];

// // add 2 elements in array
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // spread operator
// // to add 2 elements in array automatically
// const newArr = [1, 2, ...arr];
// console.log(newArr);


// // to make output of arr with spread operator
// console.log(...newArr);


// // make main menu with array
// const newMenu = [...restaurant.mainMenu, 'Gnocchi']
// console.log(newMenu);


// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];


// // join array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // iterables
// // array, strings, maps, sets, NOT object

// const str = 'Nico';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// console.log(...str);

// // real world example
// // const ingredients = [
// //     prompt(`Let's make pasta! Ingredients 1 `),
// //     prompt(`Ingredients 2 `),
// //     prompt(`Ingredients 1 `)
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);


// // work with object too
// const newRestaurant = {
//     foundedIn: 1999,
//     ...restaurant,
//     founder: 'Guiseppe'
// }

// console.log(newRestaurant);


// // copy object
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);


// ======== Rest Pattern and Rest Parameters ========
// to collect multiple element to array
/// to pack element to array

// destructuring

// // SPREAD, because on RIGHT side of
// const arr = [1, 2, ...[3, 4]];


// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);


// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);


// // with objects
// const {
//     sat,
//     ...weekdays
// } = restaurant.openingHours;
// console.log(sat, weekdays);


// // function
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };
// add(2, 3);
// add(2, 3, 4, 5);
// add(2, 3, 4, 5, 6, 7, 8);

// const x = [23, 5, 7];
// add(...x);

// // using rest parameters with restaurant
// restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
// restaurant.orderPizza('Mushrooms');



// // ======== Short Circuiting ========
// // && and || can use any data type
// // return any data type
// // short circuiting


// console.log('===== || =====');
// // will output the truth result
// // search until got true result
// console.log(3 || 'Nico');
// console.log('' || 'Nico');
// console.log(true || 0);
// console.log(undefined || null);


// // restaurant objects
// restaurant.numGuests = 23;
// const guess1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guess1);

// const guess2 = restaurant.numGuests || 10;
// console.log(guess2);


// console.log('===== && =====');
// // will output the true if all true
// // if there any false value then output the false value
// console.log(0 && 'Nico');
// console.log(3 && 'Nico');

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('Mushroom', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach')



// // ======== Nullish Coalescing Operators ========
// // restaurant.numGuests = 0;
// // nullish : null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// ======== Logical Assignment  Operators ========

// const rest1 = {
//     name: 'Capri',
//     // numGuest: 20,
//     numGuest: 0,
// };

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

// // or assignment operator
// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;

// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;

// // nullish assingment operators
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// // and assignment operators
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);


// // ======== Looping Arrays : The for-of Loop ========

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // using for-of
// for (const item of menu) {
//     console.log(item);
// }

// // to get index
// for (const [i, element] of menu.entries()) {
//     console.log(`${i + 1} : ${element}`);
// }


// ======== Enhanced Object Literals ========

// ======== Optional Chaining ========

// // check 
// if (restaurant.hours && restaurant.hours.Monday) {
//     console.log(restaurant.hours.Monday.open);
// }


// // using optional chaining (?.)
// // console.log(restaurant.hours.Monday ? .open);
// // console.log(restaurant.hours ? .Friday ? .open);

// // console.log(restaurant.hours.Friday.open);
// // console.log(restaurant.openingHours.monday.openingHours);

// // example
// // const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// // for (const day of days) {
// //     // console.log(day);
// //     // const open = restaurant.hours[day]?.open ?? 'closed'
// //     console.log(`On ${day}, we open at ${open}`);
// // }


// // on methods
// // console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

// // Check if arrays exist
// const users = [{
//     names: 'Nico',
//     email: 'hello@nico.io',
// }];

// console.log(users[0]?.names ?? 'User array Empty');


// ======== Looping Objects: Object Keys, Values, and Entries ========
// if using object, using Object.-

// property keys
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//     openStr += `${day},`;
// }

// console.log(openStr);


// // property values
// const values = Object.values(hours);
// console.log(values);

// // property entries
// // contains index and element
// // turn object into array

// // entire object
// const entries = Object.entries(hours);
// console.log(entries);

// for (const [key, {
//         open,
//         close
//     }] of entries) {
//     console.log(`On the ${key} we open at ${open} and close at ${close}`);
// }


// // ======== Sets ========
// // Sets
// // one of data structures
// // collection of unique values
// // to get unique values

// const ordersSet = new Set(
//     [
//         'Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta',
//         'Pizza'
//     ]);

// console.log(ordersSet);

// console.log(new Set('Nico'));

// // to know length
// console.log(ordersSet.size);

// // to check if any
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// // add element
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// // delete element
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // delete all element
// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) {
//     console.log(order);
// }

// // big use case
// // example
// // to remove duplicate array
// const staff = [
//     'Waiter',
//     'Chef',
//     'Waiter',
//     'Manager',
//     'Chef',
//     'Waiter'
// ];

// // make array from set
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set([
//     'Waiter',
//     'Chef',
//     'Waiter',
//     'Manager',
//     'Chef',
//     'Waiter'
// ]).size);
// console.log(new Set('NicoNico').size);


// ======== Maps ========
// to map values to keys
// similiar to object
// keys not just string

// const rest = new Map();

// // fill the map
// rest.set('name', 'Classico Italiano');
// rest.set(1, `Firenze, Italy`);
// rest.set(2, `Lisbon, Portugal`);
// console.log(rest);

// rest.set('categories',
//         ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// // to get data
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // example
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // check if maps contain certain key
// console.log(rest.has('categories'));

// // delete data
// rest.delete(2);
// console.log(rest);

// // map size
// console.log(rest.size);

// // use array as map keys
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), "Heading");
// console.log(rest);

// // to get data

// console.log(rest.get(arr));


// // ======== Maps Iteration ========
// // populating a new map without set

// const question = new Map([
//     ['question', 'What is the best programming language  in the world '],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'Try again']
// ]);

// console.log(question);

// // convert object to maps
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// // iteration
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof (key) === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// // const answer = Number(prompt('Your answer'));
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// // convert map to array
// console.log(...question);
// console.log([...question.entries()]);
// console.log([...question.keys()]);



// ======== Working with String : 1 ========

// const airLine = 'TAP Air Portugal';
// const plane = 'A320';

// // to get string position
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737' [0]);

// // to get length
// console.log(airLine.length);
// console.log('B737'.length);


// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));

// // case sensitive
// console.log(airLine.indexOf('Portugal'));

// // slices method
// // to cut string from position in parameter
// // will return a string
// // to use slice save in variable
// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));


// // to get first string without knowing string
// console.log(airLine.slice(0, airLine.indexOf(' ')));
// // to get Last string without knowing string
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// // if negative in parameter then wil go from last character
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddleSeat = (seat) => {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log(`You got the middle seat 😊`);
//     } else {
//         console.log(`You got lucky`);
//     }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');

// console.log(new String('Nico'));
// console.log(typeof new String('Nico'));
// console.log(typeof new String('Nico').slice(1));


// // ======== Working with String : 2 ========

// // to make string all big or all small
// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// // fix capitalization in name
// const passenger = 'nICo'; // Nico;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // comparing email
// const email = 'hello@nico.io';
// const loginEmail = '  Hello@Nico.Io  \n';

// // convert to lowercase
// // const lowerEmail = loginEmail.toLowerCase();

// // // to remove character
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// // do in 1 step
// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);

// console.log(email === normalizeEmail);

// // trim start and trim end


// // to replacing string
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');

// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate'));

// // to replace all character
// // console.log(announcement.replaceAll('door', 'gate'));

// // use regex to replace all characters
// console.log(announcement.replace(/door/g, 'gate'));


// // Boolean return


// // includes
// // somewhere in string will return true
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));

// // starts with
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the new Airbus Family');
// }


// // practice exercise
// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are not allowed on board');
//     } else {
//         console.log('Welcome aboard!');
//     }
// }

// checkBaggage('I have a laptop, some food, and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection')


// ======== Working with String : 2 ========

// // split string
// console.log('a+very+nice+string'.split('+'));
// console.log('Nico Nico'.split(' '));

// const [firstName, lastName] = 'Nico Nico'.split(' ');

// // join method
// // opposite of split
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(newName);

// // capitalize name
// const passenger = 'jessica ann smith davis';

// const capitalizeName = function (name) {
//     const names = name.split(' ');
//     const namesUpperCase = [];

//     for (const n of names) {
//         // namesUpperCase.push(n[0].toUpperCase() + n.slice(1));
//         namesUpperCase.push(n.replace(n[0], n[0].toUpperCase()));
//     }

//     console.log(namesUpperCase);
// }

// capitalizeName(passenger);
// capitalizeName('nico nico');


// ======== Working with String : 3 ========

// // padding
// // to add string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Nico'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard('34256787'));
// console.log(maskCreditCard(34256787543243567));
// console.log(maskCreditCard('34256787543243567'));


// // repeat 
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planeInLine = function (n) {
//     console.log(`There are ${n} in line ${'✈️'}`.repeat(5));
// }

// planeInLine(5);
// planeInLine(3);
// planeInLine(12);


// // ======== String Methods Practice ========

// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

// const getCode = (str) => str.slice(0, 3).toUpperCase();


// for (const flight of flights.split('+')) {
//     // use destructuring
//     const [type, from, to, time] = flight.split(';');

//     const output = `${type.startsWith('_Delayed') ? 
//     '🔴' : ' '}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36, ' ');
//     console.log(output);

// }
