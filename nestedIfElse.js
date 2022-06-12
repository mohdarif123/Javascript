let winningNumber1 = 19;
let winningNumber2 = 32;
let winningNumber3 = 32;

let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
    console.log("your guess is right");
} else {
    if (userGuess < winningNumber) {
        console.log("too low");
    } else {
        console.log("too high")
    }
}
