// Create 20 variables of strings, numbers, booleans and concatenate them into one short essay.
const owneroftheUniverse = "God";
const myWife = "Nenye";
const mission = "Kingdom expansion";
const role = "Kingdom financier";
const domain = "Port Harcourt";
const visionary = "a new generation";
const provider = "Jehova Jireh";
const childhoodclub = "Arsenal";
const myAge = 100;
const salvation = 90;
const source = "faith";
const target = "Souls of Men";
const myName = "Rainer";
const myEmail = "reyonsa@yahoo.com";
const region = "Africa";
const country = "Nigeria";
const city = "Lagos";
const region1 = "Europe";
const region2 = "North America";
const country1 = "United States";
const mass = "men";
const numbers = "youth";
const business = "Woldreamz inc";

console.log(owneroftheUniverse);
console.log(myWife);
console.log(myName);
console.log(myAge - salvation);
console.log(
  `I've come to find that in my ${salvation} year walk with the ${owneroftheUniverse}, that he has consistently fufils his words to a generation of ${mass} on the earth. I'd quite found that the ${numbers} have finally gravitated back to ${owneroftheUniverse}. Its ${numbers} have been completely transformed. My life's been like a really long walk with ${owneroftheUniverse}, you know? It all started when I, ${myName} was just three years old, feeling this special connection with Him. And guess what? It lasted for more than a hundred years!

So, I kinda became this money guy for ${owneroftheUniverse}'s team. It wasn't about being super rich; it was more like ${provider} trusting me to help fund all those events and stuff that spread His message worldwide. From small gatherings to big conferences, I and my wife, ${myWife} were priviledged to play a small role in making it happen. ${provider} provided not just money but also divine inspiration on ideas to draw ${mass} to the truth and make things work.

And hey, it's not just about money. ${owneroftheUniverse} had used me to get young folks (${numbers}) interested in Him, from ${region} to ${region1} and ${region2}. You know, turning their focus to the right things and helping them live better lives. It's been like a mission to bring back his will for ${mass} and right living in people's hearts.

Yeah, there were tough times, like when I was in my 20s, in ${domain}, I had struggled to follow, I loved him but I couldn't seem to understand what my life was becoming and it was heartbreaking, yet he held me. At the end, at the turn of that decade, he reemerged and held me, gave me conviction, brought my ${myWife} along, gave me the inspiration for the now uber succesful ${business}, and even at the time my heart was fainting and then he turns my heart around, I found strength in talking to ${owneroftheUniverse}. It wasn't like fighting with swords; it was more about using ${source}, prayer, and trusting ${provider}'s promises to overcome challenges. The victories I experienced weren't just in the spiritual realm; they made a real impact on people's lives.

Looking back, my life has been this cool adventure with ${owneroftheUniverse}, full of ups and downs. Whether it was doing small acts of ${source} or helping out with big events, it's been about showing how awesome life can be when you trust and walk with ${owneroftheUniverse}.`
);


//Create 4 simple game using the if/else statement


//Number Guessing Game

const secretNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = prompt("Guess a number between 1 and 10:");

if (parseInt(userGuess) === secretNumber) {
  console.log("Congratulations! You guessed the correct number!");
} else {
  console.log(`Sorry, the correct number was ${secretNumber}. Try again!`);
}

//Rock, Paper, Scissors Game

const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

console.log(`Computer chose: ${computerChoice}`);

if (userChoice === computerChoice) {
  console.log("It's a tie!");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  console.log("You win!");
} else {
  console.log("You lose!");
}

//Color Matching Game

const colors = ["red", "green", "blue", "yellow"];
const randomIndex = Math.floor(Math.random() * colors.length);
const targetColor = colors[randomIndex];
const userColor = prompt("Guess the color (red, green, blue, yellow):").toLowerCase();

if (userColor === targetColor) {
  console.log("Great job! You guessed the correct color!");
} else {
  console.log(`Sorry, the correct color was ${targetColor}. Try again!`);
}

//Letter Guessing Game

const secretLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase letter
const userThink = prompt("Guess a lowercase letter:");

if (userGuess === secretLetter) {
  console.log("Congratulations! You guessed the correct letter!");
} else {
  console.log(`Sorry, the correct letter was ${secretLetter}. Try again!`);
}


// Dice Roll Game

const userCall = parseInt(prompt("Guess a number between 1 and 6:"));
const diceRoll = Math.floor(Math.random() * 6) + 1;

console.log(`The dice rolled: ${diceRoll}`);

if (userGuess === diceRoll) {
  console.log("Congratulations! You guessed the correct number!");
} else {
  console.log(`Sorry, the correct number was ${diceRoll}. Try again!`);
}
