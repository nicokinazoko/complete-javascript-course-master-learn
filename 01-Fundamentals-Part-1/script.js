       //Output Data 
       console.log('Output Data')

       // //declaration js is amazing
       // let js = 'amazing';

       // //make output calculation using console.log
       // console.log(40 + 8 + 23 - 10);

       // //output value Nico
       // console.log('Nico')

       // //output number
       // console.log(23)

       // //declaration name 
       // let firstName = 'Nico'

       // //output firstName 
       // console.log(firstName)

       // //declaration variable
       // let myFirstJob = 'Programmer'
       // let myCurrentJob = 'College Student'

       // //output variable
       // console.log(myFirstJob)


       // //====================DATA TYPES=====================
       // //**** 7 PRIMITIVE DATA TYPES *****
       // //1. Number : Floating point Numbers
       // //EXAMPLE
       // let number = 23

       // //2. String : Sequence of characters
       // //example
       // let firstNameNico = 'Nico'

       // //3. Boolean : Logical type that can only be true or false
       // //example
       // let fullAge = true

       // //4. Undefined : Value taken by a variable that is not yet defined ('empty value')
       // //example
       // let children

       // //5. Null : empty value

       // //6. Symbol(ES2015) : Value that is unique and cannot be changed

       // //7. BigInt(ES2020) : Larger integer than the Number type can hold


       // //assign javascriptIsFun with boolean value
       // let javascriptIsFun = true

       // //output javascriptIsFun
       // console.log(javascriptIsFun)

       // //typeof : use for know the variable data types
       // //example
       // console.log(typeof javascriptIsFun)

       // //reassign javascriptIsFun
       // javascriptIsFun = 'YES'

       // //output javascriptIsFun data types
       // console.log(typeof javascriptIsFun)

       // //example empty value
       // let year

       // //output year
       // console.log(year)
       // console.log(typeof year)

       // //reassign year
       // year = 1991

       // //output year data types
       // console.log(typeof year)



       //================LET, CONST, AND VAR================================

       //LET
       //can change the values
       //example 
       // let age = 30
       // age = 31

       // //CONST
       // //value cannot be changed
       // //value cannot be empty or not declared
       // //example
       // const birthYear = 1998

       // //VAR
       // //old, use let instead
       // //example
       // var job = 'progammer'
       // job = 'teacher'

       // //example without using let, const, and var
       // lastName = 'Nico'
       // console.log(lastName)



       ////===================LECTURE: Basic Operators================

       // //MATH OPERATORS
       // //example 
       // //using minus Operators
       // const now = 2020
       // const ageNico = now - 1998
       // const ageSarah = now - 2018
       // console.log(ageNico, ageSarah)

       // //example
       // //using times operator (*) and divide (/), exponen
       // console.log(ageNico * 2, ageNico / 10, 2 ** 3)
       // //2 ** 3 means 2 to the power of 3 = 2 x 2 x 2

       // //example
       // //plus operator
       // // to join string
       // const firstName = 'Nico'
       // const lastName = 'Kinazoko'
       // console.log(firstName + ' ' + lastName)

       // //ASSIGNMENT OPERATOR
       // //EXAMPLE
       // let x = 10 + 5

       // x += 10 //+= use for x = x + 10
       // x *= 4 // means x = x * 4. Should be 100
       // x++ // means x = x + 1. Should be 101
       // x-- // means x = x - 1. Should be 100
       // console.log(x)

       // //COMPARISON OPERATORS
       // //EXAMPLE
       // console.log(ageNico > ageSarah) //meaning is ageNico is greater than ageSarah
       // //another operator : >, <, >=, <= 

       // //example
       // console.log(ageSarah >= 18)

       // //store result 
       // const isFullAge = ageSarah >= 18
       // console.log(now - 1998 > now - 2020)


       //================Operator Precedence============================

       // //Precedence means which operator do first 
       // //re declare again age
       // const now = 2020
       // const ageNico = now - 1998
       // const ageSarah = now - 2018

       // //output
       // console.log(now - 1998 > now - 2020)

       // //example
       // //left-to-right
       // console.log(25 - 10 - 5)

       // //example
       // //right-to-left
       // let x, y
       // x = y = 25 - 10 - 5 //x = y = 10, x = 10

       // //Output
       // console.log(x, y)

       // //declare average age
       // const averageAge = (ageNico + ageSarah) / 2
       // console.log(ageNico, ageSarah, averageAge)


       //================ String and Template Literals =================

       // //declare variable
       // const firstName = 'Nico'
       // const job = 'College Students'
       // const birthYear = 1998
       // const year = 2021

       // //concatenate strings
       // const nico = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!'

       // //output nico
       // console.log(nico)

       // //using template literals
       // const nicoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `

       // //output data
       // console.log(nicoNew)

       // //using backtick for irregular strings
       // console.log(`Just a regular String`)

       // //multi line string
       // console.log('String with \n\
       //               multiple \n\
       //               lines')

       // //using template literals for 
       // console.log(`
       // String
       // multiple
       // lines
       // `)                     

       //================ Taking Decisions: if / else Statements =================

       //example
       // const age = 22

       // //check using if statement
       // if (age >= 18) {
       //        console.log(`Sarah can start driving license 😂`)
       // } else {
       //        const yearsLeft = 18 - age
       //        console.log(`Sarah is too young, wait another ${yearsLeft} years`)
       // }

       // //another example    
       // const birthYear = 1998
       // let century
       // if (birthYear <= 2000) {
       //        century = 20
       // } else {
       //        century = 21
       // }

       // console.log(century)


       //================ Type Conversion and Coercion =================
       //conversion : convert one into another
       //coercion : javascript automatically converts

       //example
       //type conversion
       const inputYear = `1998`
       //convert into number
       console.log(Number(inputYear))

       console.log(Number(inputYear) + 18)

       console.log(Number('Nico'))
       console.log(typeof NaN)

       console.log(String(23))


       //type coersion
       //example
       console.log('I am ' + 23 + ' years Old' )
       console.log(`I am ${23} years old`)
       console.log('23' - '10' - 3 )
       console.log('23' * '2')
       console.log('23' > '18')

       //let guess
       let n = '1' + 1
       n = n - 1
       console.log(n)