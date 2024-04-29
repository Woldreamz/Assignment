//Build Guessing Game
//Gonna generate random numbers from 0 to 11
//Give the user ability to guess
//If the user guesses something wrong, the game will give them a hint and ask them again

function guessGame () {
    let randomNumber = Math.random() * 11;
    let fixedNumber = Math.floor(randomNumber);
    console.log(fixedNumber);

    let guess;

    do {
        guess = procdmpt("Guess a random number between 0 and 11");
        console.log(guess, randomNumber);

        if (randomNumber > guess)(
            console.log("Your guess is too low. Try again")
        )else if (randomNumber < guess) (
        console.log("Your guess is too high. Try again");
        )
    } while (guess != randomNumber);

    console.log("You have won!");
    }

    guessGame();
