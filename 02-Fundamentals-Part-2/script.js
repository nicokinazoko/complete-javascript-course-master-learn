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
    'use strict';

    // faster to ride

    // example
    const calcAge2 = function calcAge1(birthYear) {
        return 2037 - birthYear;
    }

    // notation
    const calcAge3 = birthYear => 2037 - birthYear;
