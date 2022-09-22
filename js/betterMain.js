console.log("file loaded")

// querySelector CONST VARS HERE
const addFundsButton = document.querySelector(".add-funds");
const decreaseFundsButton = document.querySelector(".decrease-funds");
const doubleFundsButton = document.querySelector(".double-funds");
const roll = document.querySelector(".roll");
const currentFunds = document.querySelector(".currentFunds");
const house = document.querySelector(".house");
const higher = document.querySelector(".higher");
const lower = document.querySelector(".lower");
const winLossScreen = document.querySelector(".win-loss-screen")

// LET VARS HERE
let playerTotal, computerTotal
    playerFunds = 0, houseFunds = 0, 
    playerDice = [], computerDice = [];

// FUNCTIONS HERE
// Put these into functions in case these could be used multiple times
const losing = function() {
	console.log("loser")
	houseFunds -= playerFunds;
    winLossScreen.innerHTML = "YOU LOST"
}

const winning = function() {
	console.log("WINNER");
	houseFunds += playerFunds;
    winLossScreen.innerHTML = "YOU WON"
}

// Generates random number (used for the dice)
const generateRandomNumber = function() {				
    return Math.floor(Math.random() * 6) + 1;
}

// Adds funds to the bet in increments of 100
const addFunds = function() {							
    playerFunds += 100;
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds);
}

// Removes funds from the bet in increments of 100
// If-statement makes sure that you can't have a negative betting value
const decreaseFunds = function() {
    if (playerFunds != 0) { 
        playerFunds -= 100;		
    } else {
        playerFunds = playerFunds
    }
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds)
}

// Simple script that doubles current bet
const doubleFunds = function() {
    playerFunds *= 2;
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds);
}

// Updates current bet (needed to return betting value to 0 after the end of the round)
const updateFunds = function() {
    playerFunds = 0;
    currentFunds.innerHTML = playerFunds;
    house.innerHTML = houseFunds;
    console.log("player funds: " + playerFunds);
    console.log("win/loss: " + houseFunds);
}

// Changes the computer dice sprites to be back to the "unknown state" when the player decides to roll the dice again
const hideDice = function() {
    document.querySelectorAll(".computer-dice > div").forEach(
        (element) => {
            element.className = "dice-state-unknown";
        }
    );
}

// Function used to "roll" the dice by use of the previous generateRandomNumber func
const rollDice = function() {
    playerTotal = 0;
    computerTotal = 0;
	// While loop functions as a failsafe to make sure that the player and computer cannot have the same total dice value
    while (playerTotal === computerTotal) {				
        playerDice = [generateRandomNumber(), generateRandomNumber()]
        computerDice = [generateRandomNumber(), generateRandomNumber()];

        playerTotal = playerDice[0] + playerDice[1];
        computerTotal = computerDice[0] + computerDice[1];
    }
	// Changes the sprite of the dice based on the number rolled by changing the class of the object
    document.querySelectorAll(".player-dice > div").forEach(
        (element, index) => {
            element.className = "dice-state-" + playerDice[index]; 
        }
    );

    hideDice();
    toggleButton();
}

// Changes the sprite of the dice based on the number rolled by changing the class of the object
const revealDice = function() {
    document.querySelectorAll(".computer-dice > div").forEach(
        (element, index) => {
            element.className = "dice-state-" + computerDice[index]; 
        }
    );
}

// Toggles all buttons to either enabled or disabled causing the player to be unable to change the betting value or the "re-roll" the dice
const toggleButton = function() {
    document.querySelectorAll("button").forEach(
        function(button) {
            button.disabled = !button.disabled;
        }
    );
}

//functions determining whether the player has guessed correctly
const guessHigher = function() {
    if (playerTotal > computerTotal) {
		winning();
        house.innerHTML = houseFunds;
    } else {
		losing();
        house.innerHTML = houseFunds;
    }
    
    revealDice();
    updateFunds();
    toggleButton();
}

const guessLower = function() {
    if (playerTotal < computerTotal) {
		winning();
        house.innerHTML = houseFunds;
    } else {
		losing();
        house.innerHTML = houseFunds;
    }

    revealDice();
    updateFunds();
    toggleButton();
}

//post func stuff here

updateFunds();

addFundsButton.addEventListener("click", addFunds);
decreaseFundsButton.addEventListener("click", decreaseFunds);
doubleFundsButton.addEventListener("click", doubleFunds);
roll.addEventListener("click", rollDice);
higher.addEventListener("click", guessHigher);
lower.addEventListener("click", guessLower);