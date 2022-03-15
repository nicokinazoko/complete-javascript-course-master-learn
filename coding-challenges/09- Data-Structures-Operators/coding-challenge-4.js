// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea � § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable 
// name conversion working � § This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    // console.log(rows);

    for (const [index, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        // console.log(row, first, second);
        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        console.log(`${output.padEnd('20')} ${'✅'.repeat(index + 1)}`);

    }

    // console.log(output)
});


// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure


// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// convert to camelCase

// const camelCase = function (name) {
//     const nameSplit = name.split('_');
//     const nameCamel = [];
//     console.log(nameSplit);

//     console.log(nameSplit[1].slice());
//     // nameCamel.push(nameSplit[1].slice(0)).toUpperCase();

// }
// camelCase('underscore_case');
// camelCase('first_name');
// camelCase('Some_Variable');
// camelCase('calculate_AGE');
// camelCase('delayed_departure');