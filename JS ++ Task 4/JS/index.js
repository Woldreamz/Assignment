//do {
    // Generate a random number between 1 and 100
//    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Get user guess
//    let guess = parseInt(prompt("Guess a number between 1 and 100:"));

    // Check guess
//    if (guess === randomNumber) {
//        alert("Congratulations! You guessed the number!");
//        break; // Exit the loop if guess is correct
//    } else if (guess < randomNumber) {
//        alert("Too low! Try again.");
//    } else {
//        alert("Too high! Try again.");
//    }
//} while (true); // Loop continues until guess is correct

//Here's how it works:

//The do...while(true) loop ensures the game runs at least once.
//Inside the loop, a random number is generated and stored in randomNumber.
//The user is prompted to guess a number using prompt. parseInt converts the input to a number.
//The code checks the user's guess:
//If the guess is correct, an alert congratulates the user and the break statement exits the loop.
//If the guess is too low, an alert informs the user.
//If the guess is too high, another alert informs the user.
//Since while(true) is always true, the loop repeats until the break statement is triggered.

function chooseDifficulty() {
    let difficulty = prompt("Choose difficulty (easy, medium, hard):");
    difficulty = difficulty.toLowerCase(); // Ensure case-insensitive input

    let range;
    let guessesAllowed;

    switch (difficulty) {
        case "easy":
            range = { min: 1, max: 50 };
            guessesAllowed = 7;
            break;
        case "medium":
            range = { min: 1, max: 100 };
            guessesAllowed = 5;
            break;
        case "hard":
            range = { min: 1, max: 200 };
            guessesAllowed = 3;
            break;
        default:
            alert("Invalid difficulty. Please choose easy, medium, or hard.");
            return; // Exit function if invalid difficulty chosen
    }

    playGame(range, guessesAllowed);
}

function playGame(range, guessesAllowed) {
    let randomNumber = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    let guesses = [];

    for (let i = 0; i < guessesAllowed; i++) {
        let guess = parseInt(prompt("Guess a number between " + range.min + " and " + range.max + ":"));
        guesses.push(guess);

        if (guess === randomNumber) {
            alert("Congratulations! You guessed the number in " + (i + 1) + " tries!");
            break;
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }

    if (guess !== randomNumber) {
        alert("You ran out of guesses! The number was: " + randomNumber + "\nYour guesses: " + guesses.join(", "));
    }
}

chooseDifficulty();