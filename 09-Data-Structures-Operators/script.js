'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],



    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },


    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address
    }) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered 
        to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
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

