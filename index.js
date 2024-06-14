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
    console.log(`Congratulations! you guessed right number. `);
}
else {
    console.log(`Your guessed wrong number.`);
}
// let guessNumber = false;
// let guesses = 0;
// let number = Math.ceil(Math.random()*10);
// while(!guessNumber){
//   const userSaysHigher = await inquirer.prompt([`The current number is ${number}. Do you think the next number will be higher?`]);
//   const nextNumber = Math.ceil(Math.random()*10);
//   if(nextNumber > number && userSaysHigher || nextNumber <= number && !userSaysHigher){
//       alert(`Correct! It was ${nextNumber}.`);
//     guesses ++;
//     number = nextNumber;
//     } else {
//       alert(`Wrong! It was ${nextNumber}`);
//       let gameOver = true
//     }
// }
// alert(`Game Over! You managed to guess correctly ${guesses} times.`);
