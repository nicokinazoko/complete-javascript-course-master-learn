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


console.log(`LECTURE: Strings and Template Literals`)
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

//ANSWER

const descriptionNew = `${country} is in ${continent} and its ${population} million speak ${language}`
console.log(descriptionNew)



console.log(`LECTURE: Taking Decisions: if / else Statements`)
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to original

//ANSWER
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)

if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} below average`)
}

// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to original

//if the population is 13
population = 13

if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} below average`)
}

//if the population is 33
population = 33
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} below average`)
}

console.log(`LECTURE: Type Conversion and Coercion`)
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

//ANSWER
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; = 4
// '19' - '13' + '17'; 617
// '19' - '13' + 17; 23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; 1143
// 2. Execute the operations to check if you were right
console.log(`
    ${'9' - '5'},
    ${'19' - '13' + '17'},
    ${'19' - '13' + 17},
    ${'123' < 57},
    ${5 + 6 + '4' + 9 - 4 - 2}
    `)