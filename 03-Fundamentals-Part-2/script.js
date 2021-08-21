    //================ Activating Strict Mode =================

    // strict mode used to secure js code
    // always use strict mode to avoid accidental errors
    // place it in the beginning of the code
    // advantage : 
    // 1. do certain things
    // 2. create visible errors
    // example


    'use strict';

    // let hasDriversLicense = false;
    // const passTest = true;

    // if(passTest) hasDriversLicense = true;
    // if(hasDriversLicense) console.log(`I can drive`);

    // example
    // const interface = 'Audio';
    // const private = 534;
    // const if = 23;
    // the output is the word is preserved to be used in the future


    //================ Functions =================

    // don't forget to use strict
    // 'use strict';

    // // notation
    // function logger() {
    //     console.log(`My Name is Nico`);
    // }

    // // call the function / running
    // logger();
    // logger();
    // logger();

    // // example
    // function fruitProccessor(apples, oranges) {
    //     console.log(apples, oranges);
    //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    //     return juice;
    // }

    // fruitProccessor(5, 0); // the result is 5 0

    // // if want to show the return value, then the function must be assign into variable

    // // example
    // const appleJuice = fruitProccessor(5, 0);
    // console.log(appleJuice);

    // // also can return the value using console log without assign it to variable first
    // // example
    // console.log(fruitProccessor(5, 0));

    // // example
    // const appleOrangeJuice = fruitProccessor(2, 4);
    // console.log(appleOrangeJuice);





    //================ Function Declarations vs.Expressions =================

    // // don't forget to use strict
    // 'use strict';

    // //example
    // function calcAge1(birthYear) {
    //     return 2037 - birthYear;
    // }

    // // call the function
    // const age1 = calcAge1(1991);
    // console.log(age1);


    // // function expressions
    // // notation
    // // assign function into variable

    // // example
    // const calcAge2 = function calcAge1(birthYear) {
    //     return 2037 - birthYear;
    // }

    // const age2 = calcAge2(1991);

    // console.log(age1,age2);



    //================ Arrow Functions =================
    // // don't forget to use strict
    // 'use strict';

    // // faster to ride

    // // example
    // const calcAge2 = function calcAge1(birthYear) {
    //     return 2037 - birthYear;
    // }

    // // notation
    // const calcAge3 = birthYear => 2037 - birthYear;

    // // calling function
    // const age3 = calcAge3(1991);
    // console.log(age3);


    // // Example
    // // years until retirement
    // const yearUntilRetirement = (birthYear, firstName) => {
    //     const age = 2037 - birthYear;
    //     const retirement = 65 - age;
    //     return `${firstName} retires in ${retirement} years`;
    // }

    // console.log(yearUntilRetirement(1991, 'Nico'));
    // console.log(yearUntilRetirement(1980, 'Bob'));





    //================ Functions Calling Other Functions =================
    // // // don't forget to use strict
    // 'use strict';

    // function cutFruitPieces(fruit) {
    //     return fruit * 4;
    // }

    // function fruitProccessor(apples, oranges) {
    //     const applePieces= cutFruitPieces(apples);
    //     const orangePieces = cutFruitPieces(oranges);
    //     console.log(apples, oranges);
    //     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    //     return juice;
    // }

    // console.log(fruitProccessor(2,3));






    //================     Functions Calling Other Functions =================
    // // don't forget to use strict
    // 'use strict';

    // example
    // arrow expressions
    // const yearUntilRetirement = (birthYear, firstName) => {
    //     const age = 2037 - birthYear;
    //     const retirement = 65 - age;
    //     return `${firstName} retires in ${retirement} years`;
    // }

    // separate age into different function
    // const calcAge = function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // // regular expressions
    // const yearUntilRetirement = function (birthYear, firstName) {
    //     const age = calcAge(birthYear);
    //     const retirement = 65 - age;

    //     if (retirement > 0) {
    //         console.log(`${firstName} retires in ${retirement} years`);
    //         return retirement;
    //     } else {
    //         console.log(`${firstName} is already retired 🎉`);
    //         return -1;
    //     }

    // }

    // console.log(yearUntilRetirement(1991, 'Nico'));



    // console.log(yearUntilRetirement(1991, 'Nico'));
    // console.log(yearUntilRetirement(1950, 'Bob'));



    //================ Introduction to Arrays =================

    // // example
    // const friend1 = 'Michael';
    // const friend2 = 'Steven';
    // const friend3 = 'Peter';

    // // declaration of array
    // const friends = ['Michael', 'Steven', 'Peter'];
    // console.log(friends);


    // // another declaration of array
    // const y = new Array(1991, 1984, 2008, 2021);

    // // output
    // console.log(friends[0]);
    // console.log(friends[1]);
    // console.log(friends[2]);

    // // to get the length of the array
    // console.log(friends.length);

    // // another method
    // // can put any expression in bracket / []
    // console.log(friends[friends.length - 1]);


    // // mutate the array
    // // example
    // friends[2] = 'Jay';
    // console.log(friends);


    // // array can hold values at the same time
    // // example
    // const firstName = 'Nico';
    // // can use inside the array
    // const nico = [firstName, 'Nico', 2021 - 1998, 'College Student', friends];

    // // output
    // console.log(nico);
    // console.log(nico.length);


    // // array exercise
    // // to use function to array
    // const calcAge = function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // const years = [1990, 1967, 2002, 2010, 2018];

    // console.log(calcAge(years));

    // // cannot use the function with arrays
    // // but can use the individual element of array

    // // example
    // const age1 = calcAge(years[0]);
    // const age2 = calcAge(years[1]);
    // const age3 = calcAge(years[years.length - 1]);

    // console.log(age1, age2, age3);

    // // make an array
    // const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

    // console.log(ages);



    // ================ Basic Array Operations (Methods) =================

    // some of array methods

    // const friends = ['Michael', 'Steven', 'Peter'];

    // // ===== ADD ELEMENTS =====
    // // PUSH
    // // add elements in the end of the array
    // // if push assigned to variable, it will returns the length of the array after insertion

    // // notation
    // // example
    // const newLength = friends.push('Jay');

    // // output
    // console.log(friends);
    // console.log(newLength);


    // // UNSHIFT
    // // add elements in the beginning

    // // notation
    // // example
    // friends.unshift('John');
    // console.log(friends);


    // // ===== REMOVE ELEMENTS =====

    // // POP
    // // remove last element of the array
    // // if pop assigned to variable, it will returns the element which is removed
    // friends.pop();
    // const popped = friends.pop();

    // // output
    // console.log(friends);
    // console.log(popped);


    // // SHIFT
    // // remove the first element of the array
    // friends.shift();
    // console.log(friends);


    // // array.INDEXOF()
    // // use to know which position of a certain element
    // console.log(friends.indexOf('Steven'));

    // // if the elements is not in the array, result is -1
    // console.log(friends.indexOf('Bob'));



    // // INCLUDES
    // // return true if the element is in the array, false if it isn't
    // console.log(friends.includes('Steven'));
    // console.log(friends.includes('Bob'));

    // // if psuh the number and want to use include method, then result is false
    // // example
    // friends.push(23);
    // console.log(friends.includes('23'));
    // // because 23 in console.log is string-type and 23 in the push is a number

    // // but if without ' ' then result is should be true
    // console.log(friends.includes(23));


    // // write include with conditional
    // if(friends.includes('Steven')){
    //     console.log(`You have a friend called Steven`);
    // }




    // ================ Introduction to Objects =================

    // example array
    // const nicoArray = [
    //     'Nico',
    //     'Nico',
    //     2021 - 1998,
    //     'College Student',
    //     ['Michael', 'Peter', 'Steven']
    // ];


    // // notation object
    // const nico = {
    //     firstName: 'Nico',
    //     lastName: 'Nico',
    //     age: 2021 - 1998,
    //     job: 'College Student',
    //     friends: ['Michael', 'Peter', 'Steven']
    // }




    // ================ Dot vs.Bracket Notation =================


    // // notation object
    // const nico = {
    //     firstName: 'Nico',
    //     lastName: 'Nico',
    //     age: 2021 - 1998,
    //     job: 'College Student',
    //     friends: ['Michael', 'Peter', 'Steven']
    // }

    // // output data
    // console.log(nico);

    // // dot notation
    // console.log(nico.lastName);

    // // bracket notation
    // console.log(nico['lastName']);


    // // using bracket for expression
    // // example
    // const nameKey = 'Name';

    // console.log(nico['first' + nameKey]);
    // console.log(nico['last' + nameKey]);

    // // but doesnt work with expression in dot notation

    // // make a input field in pop up window
    // const interestedIn = prompt(`What do you want to know about Nico? Choose between first name, last name, age, job, and friends`);

    // // using bracket to use 
    // // because if using dot then the result is undefined

    // if (nico[interestedIn]) {
    //     console.log(nico[interestedIn]);
    // } else {
    //     console.log('Wrong Request. Choose between first name, last name, age, job, and friends');
    // }


    // // add new properties in object

    // // dot notation
    // nico.location = 'Indonesia';
    // nico['twitter'] = `@nico_kinazoko`;
    // console.log(nico);


    // // challenge
    // // Nico has 3 friends, and his best friends is called Michael

    // const string = `${nico.firstName} has ${nico.friends.length} friends , and his best friends is called ${nico.friends[0]}`;
    // const string1 = `${nico['firstName']} has ${nico['friends'].length} friends , and his best friends is called ${nico['friends'][0]}`;

    // console.log(string);
    // console.log(string1);






    // ================ Object Methods =================

    // basically function is an value
    // so function can be inside the object

    // // example
    // const nico = {
    //     firstName: 'Nico',
    //     lastName: 'Nico',
    //     birthYear: 1998,
    //     job: 'College Student',
    //     friends: ['Michael', 'Peter', 'Steven'],
    //     hasDriversLicense: true,

    //     // calcAge: function (birthYear) {
    //     //     return 2037 - birthYear;
    //     // }

    //     // calcAge: function () {
    //     //     // console.log(this);
    //     //     return 2037 - this.birthYear;
    //     // }

    //     calcAge: function () {
    //         this.age = 2037 - this.birthYear;
    //         return this.age;
    //     },

    //     // using ternary operator
    //     string: function () {
    //         return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and 
    //         he has ${this.hasDriversLicense  ? 'a' : 'no'} driver's license.`
    //     },

    //     // using function

    //     getSummary: function () {
    //         return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and 
    //         he has ${this.hasDriversLicense  ? 'a' : 'no'} driver's license.`
    //     }
    // };

    // // dot notation
    // console.log(nico.calcAge());

    // // bracket notation
    // // console.log(nico['calcAge'](1998));

    // console.log(nico.age);
    // console.log(nico.age);
    // console.log(nico.age);
    // console.log(nico.age);



    // // challenge
    // // "Nico is 46-years old teacher, and he has a/no driver license"

    // // answer 
    // // my answer
    // console.log(nico.string());

    // // lecturer answer
    // console.log(nico.getSummary());




    // ================ Iteration: The for Loop =================

    // loop statement
    // for loops keeps running while condition is true
    // notation
    // for (let rep = 1; rep <= 30; rep++){
    //     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    // }






    // ================ Looping Arrays, Breaking and Continuing =================

    // // example array
    // const nicoArray = [
    //     'Nico',
    //     'Nico',
    //     2021 - 1998,
    //     'College Student',
    //     ['Michael', 'Peter', 'Steven'],
    //     true
    // ];

    // const types = [];

    // for (let i = 0; i < nicoArray.length; i++) {
    //     console.log(nicoArray[i], typeof nicoArray[i]);

    //     // to add element in array
    //     // types[i] = typeof nicoArray[i];

    //     // another way
    //     types.push(typeof nicoArray[i]);
    // }

    // console.log(types);

    // const years = [1991, 2007, 1969, 2020];

    // const ages = [];

    // for (let i = 0; i < years.length; i++) {
    //     ages.push(2037 - years[i]);
    // }

    // console.log(ages);


    // // continue and break

    // // continue
    // // exit the current iteration and continue to the next one
    // // basically skip the iteration

    // // example
    // console.log('ONLY STRING');
    // for (let i = 0; i < nicoArray.length; i++) {
    //     if (typeof nicoArray[i] !== 'string')
    //         continue;


    //     console.log(nicoArray[i], typeof nicoArray[i]);

    //     // types.push(typeof nicoArray[i]);
    // }

    // // break
    // // terminate the loop total

    // // example
    // console.log('BREAK NUMBER')
    // for (let i = 0; i < nicoArray.length; i++) {
    //     if (typeof nicoArray[i] === 'number')
    //         break;


    //     console.log(nicoArray[i], typeof nicoArray[i]);

    //     // types.push(typeof nicoArray[i]);
    // }




    // ================ Looping Backwards and Loops in Loops =================

    // // looping backwards
    // const nicoArray = [
    //     'Nico',
    //     'Nico',
    //     2021 - 1998,
    //     'College Student',
    //     ['Michael', 'Peter', 'Steven'],
    //     true
    // ];

    // for (let i = nicoArray.length - 1; i >= 0; i--) {
    //     console.log(i, nicoArray[i], typeof nicoArray[i]);
    // }


    // // loop inside loops

    // // example
    // for(let exercise = 1; exercise < 4; exercise++) {
    //     console.log(`---------- Starting exercise ${exercise}`);

    //     for(let rep = 1; rep < 6; rep++){
    //         console.log(`Exercise ${exercise} : Lifting Weight repetition ${rep} 🏋️‍♀️`);
    //     }
    // }





    // ================ The while Loop =================

    // example
    // for (let rep = 1; rep <= 10; rep++) {
    //     console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
    // }

    // while notation
    // example

    // let rep = 1;
    // while (rep <= 10) {
    //     console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
    //     rep++;
    // }


    // not depend a variable
    // example
    // roll a dice until 6
    // if got 6, it stopped

    // make a dice consist of 1 to 6
    // let dice = Math.trunc(Math.random() * 6) + 1;
    // // console.log(dice);

    // while (dice !== 6) {
    //     console.log(`You Rolled a ${dice}`);
    //     dice = Math.trunc(Math.random() * 6) + 1;

    //     if(dice === 6){
    //         console.log(`Loop is about to end ...`);
    //     }
    // }