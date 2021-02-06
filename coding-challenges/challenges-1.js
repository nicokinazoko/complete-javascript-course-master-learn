//declare for result
let markHigherBMI 

//TEST DATA 1

//Data Mark
// const massMark = 78
// const heightMark = 1.69

// // //Data John
// const massJohn = 92
// const heightJohn = 1.95

//TEST DATA 2

//Data Mark
const massMark = 95
const heightMark = 1.88

//Data John
const massJohn = 85
const heightJohn = 1.76

//declare bmi to store BMI data
const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / heightJohn ** 2

//show result for mark bmi is higher than john

markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)


