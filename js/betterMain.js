console.log("file loaded")

//querySelector const vars here
const addFundsButton = document.querySelector(".add-funds");
const decreaseFundsButton = document.querySelector(".decrease-funds");
const doubleFundsButton = document.querySelector(".double-funds");
const roll = document.querySelector(".roll");
const currentFunds = document.querySelector(".currentFunds");
const house = document.querySelector(".house");
const higher = document.querySelector(".higher");
const lower = document.querySelector(".lower");

//let vars here
let playerTotal, computerTotal
    playerFunds = 0, houseFunds = 0, 
    playerDice = [], computerDice = [];

//functions here
const generateRandomNumber = function() {				//generates random number (used for the dice)
    return Math.floor(Math.random() * 6) + 1;
}

const addFunds = function() {							//adds funds to the bet in increments of 100
    playerFunds += 100;
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds);
}

const decreaseFunds = function() {						//removes funds from the bet in increments of 100
    if (playerFunds != 0) { 
        playerFunds -= 100;								//if-statement makes sure that you can't have a negative betting value
    } else {
        playerFunds = playerFunds
    }
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds)
}

const doubleFunds = function() {						//simple script that doubles current bet
    playerFunds *= 2;
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds);
}

const updateFunds = function() {						//updates current bet (needed to return betting value to 0 after the end of the round)
    playerFunds = 0;
    currentFunds.innerHTML = playerFunds;
    house.innerHTML = houseFunds;
    console.log("player funds: " + playerFunds);
    console.log("win/loss: " + houseFunds);
}

const hideDice = function() {							//changes the computer dice sprites to be back to the "unknown state" when the player decides to roll the dice again
    document.querySelectorAll(".computer-dice > div").forEach(
        (element) => {
            element.className = "dice-state-unknown";
        }
    );
}

const rollDice = function() {							//function used to "roll" the dice by use of the previous generateRandomNumber func
    playerTotal = 0;
    computerTotal = 0;

    while (playerTotal === computerTotal) {				//while loop functions as a failsafe to make sure that the player and computer cannot have the same total dice value
        playerDice = [generateRandomNumber(), generateRandomNumber()]
        computerDice = [generateRandomNumber(), generateRandomNumber()];

        playerTotal = playerDice[0] + playerDice[1];
        computerTotal = computerDice[0] + computerDice[1];
        //console.log(playerTotal, computerTotal);
    }
														//Changes the sprite of the dice based on the number rolled by changing the class of the object
    document.querySelectorAll(".player-dice > div").forEach(
        (element, index) => {
            element.className = "dice-state-" + playerDice[index]; 
        }
    );

    hideDice();
    toggleButton();
}

const revealDice = function() {							//Changes the sprite of the dice based on the number rolled by changing the class of the object
    document.querySelectorAll(".computer-dice > div").forEach(
        (element, index) => {
            element.className = "dice-state-" + computerDice[index]; 
        }
    );
}

const toggleButton = function() {						//Toggles all buttons to either enabled or disabled causing the player to be unable to change the betting value or the "re-roll" the dice
    document.querySelectorAll("button").forEach(
        function(button) {
            button.disabled = !button.disabled;
        }
    );
}


const guessHigher = function() {						//functions determining whether the player has guessed correctly
    if (playerTotal > computerTotal) {
        console.log("WINNER");
        houseFunds += playerFunds;
        house.innerHTML = houseFunds;
        
    } else {
        console.log("loser")
        houseFunds -= playerFunds;
        house.innerHTML = houseFunds;
    }
    
    revealDice();
    updateFunds();
    toggleButton();
}

const guessLower = function() {
    if (playerTotal < computerTotal) {
        console.log("WINNER");
        houseFunds += playerFunds;
        house.innerHTML = houseFunds;
    } else {
        console.log("loser")
        houseFunds -= playerFunds;
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