    //================ Activating Strict Mode =================

    // strict mode used to secure js code
    // always use strict mode to avoid accidental errors
    // place it in the beginning of the code
    // advantage : 
    // 1. do certain things
    // 2. create visible errors
    // example


    // 'use strict';

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