    //================ Activating Strict Mode =================
    
    // strict mode used to secure js code
    // always use strict mode to avoid accidental errors
    // place it in the beginning of the code
    // advantage : 
    // 1. do certain things
    // 2. create visible errors
    // example

    
    'use strict';

    let hasDriversLicense = false;
    const passTest = true;

    if(passTest) hasDriversLicense = true;
    if(hasDriversLicense) console.log(`I can drive`);

    // example
    // const interface = 'Audio';
    // const private = 534;
    // const if = 23;
    // the output is the word is preserved to be used in the future