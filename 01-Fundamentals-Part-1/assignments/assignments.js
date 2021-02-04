// ================LECTURE: Values and Variables===================
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

//ANSWER
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
let country = 'Indonesia';
let continent = 'Asia'
let population = '270.6 Million'

// 2. Log their values to the console
console.log("LECTURE: Values and Variables");
console.log('Country = ', country, "\nContinent = ", continent, "\nPopulation = ", population);


// ===================LECTURE: Data Types==================
// 1. Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

//ANSWER
// 1. Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
let isIsland = true
let language

// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
console.log('LECTURE: Data Types')
console.log('isIsland = ', typeof isIsland, '\nPopulation = ', typeof population, '\nCountry = ',
    typeof country, '\nLanguage = ', typeof language)


//==========================LECTURE: let, const and var======================================
// 1. Set the value of 'language' to the language spoken where you live (some 
//     countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never 
//     change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

//ANSWER
// 1. Set the value of 'language' to the language spoken where you live (some 
//     countries have multiple languages, but just choose one)
language = 'Indonesian'

// 2. Think about which variables should be const variables (which values will never 
//     change, and which might change?). Then, change these variables to const.
const country = 'Indonesia'
const continent = 'Java'
const inIsland = true

// 3. Try to change one of the changed variables now, and observe what happens
inIsland = false


