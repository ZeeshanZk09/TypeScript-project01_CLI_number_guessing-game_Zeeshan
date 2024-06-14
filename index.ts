#! /usr/bin /env node 
import inquirer from "inquirer";

//  1) Computer will generate a random number
// 2) User input for guessing number
// 3) ompare user input with computer generated number and show result
const randomNumber = (Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log(`Congratulations! you guessed right number. `)
} else {
    console.log(`Your guessed wrong number.`)
}
