// ================LECTURE: Values and Variables===================
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

//ANSWER
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
let country = 'Indonesia';
let continent = 'Asia'
let population = '270.6'

// 2. Log their values to the console
console.log("\nLECTURE: Values and Variables");
console.log('\nCountry = ', country, "\nContinent = ", continent, "\nPopulation = ", population);


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
console.log('\nLECTURE: Data Types')
console.log('\nisIsland = ', typeof isIsland, '\nPopulation = ', typeof population, '\nCountry = ',
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
// const country = 'Indonesia'
// const continent = 'Java'
// const inIsland = true

// 3. Try to change one of the changed variables now, and observe what happens
inIsland = false


console.log('\nLECTURE: Basic Operators')
//===================LECTURE: Basic Operators================
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese

//ANWER
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?

let populationInHalf = population / 2
console.log('\nPeople would live in each half in population is : ', populationInHalf)

// 2. Increase the population of your country by 1 and log the result to the console
populationInHalf++
console.log('Result of increase population by 1 : ', populationInHalf)

// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
let finlandPopulation = 6
let isMorePeopleOrNot = population > finlandPopulation
console.log('Indonesia has more people than Finland :', isMorePeopleOrNot)

// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?

let averagePopulation = 33
let isLessPeopleOrNot = population < averagePopulation
console.log('Indonesia has less people than the average country : ', isLessPeopleOrNot)
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese
let description = country + ' is in ' + continent + ', and its ' + population +
    ' million people speak ' + language
console.log(description)