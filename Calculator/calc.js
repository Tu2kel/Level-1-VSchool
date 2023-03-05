const readlineSync = require("readline-sync")

const userName = readlineSync.question('May I have your name? ');
console.log('HELLO ' + userName + '!'+ " ...I Wanna Play a 🤡!GAME!");


// function add(num1, num2) {
//     return num1 + num2;
    
// }
// function subtract(num1, num2) {
//     return  num1 - num2;
// }
// function multiply(num1, num2) {
//     return   num1 * num2;
// }
// function divide(num1, num2) {
//     return   num1 / num2;
// }

const num1 = readlineSync.question("Enter 1st Number = ")
const operator = readlineSync.keyIn("Live or Die...Make Your Choice: ", "+", "-", "*", "/")
const num2 = readlineSync.question("Enter 2nd Number = ")

 

if (operator === '+') {
    console.log("Equals = ", parseInt(num1) + parseInt(num2))

    }else if (operator === '-') {
        console.log("Equals = ", parseInt(num1) - parseInt(num2));

        }else if (operator === '*') {
            console.log("Equals = ", parseInt(num1) * parseInt(num2));

            }else if (operator === '/') {
                console.log("Equals = ", parseInt(num1) / parseInt(num2));

                }else{
                    console.log("Not 🚫 a valid 🙅 Operator.")
                }
         
                // Adds more than numbers though