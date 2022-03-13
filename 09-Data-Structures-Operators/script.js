'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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