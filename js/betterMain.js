console.log("file loaded")

//querySelector const vars here
const fundsButton = document.querySelector(".fundsButton");
const roll = document.querySelector(".roll");
const currentFunds = document.querySelector(".currentFunds");
const house = document.querySelector(".house");
const higher = document.querySelector(".higher");
const lower = document.querySelector(".lower");

//let vars here
let playerTotal;
let computerTotal;
let playerFunds = 0;
let houseFunds = 0;

//functions here
const generateRandomNumber = function() {
    return Math.floor(Math.random() * 6) + 1;
}

const addFunds = function() {
    playerFunds += 100;
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds);
}

const updateFunds = function() {
    playerFunds = 0;
    currentFunds.innerHTML = playerFunds;
    house.innerHTML = houseFunds;
    console.log("player funds: " + playerFunds);
    console.log("win/loss: " + houseFunds);
}

const rollDice = function() {
    playerTotal = 0;
    computerTotal = 0;

    while (playerTotal === computerTotal) {
        let playerDice1 = generateRandomNumber();
        let playerDice2 = generateRandomNumber();
        let computerDice1 = generateRandomNumber();
        let computerDice2 = generateRandomNumber();

        playerTotal = playerDice1 + playerDice2;
        computerTotal = computerDice1 + computerDice2;
        console.log(playerTotal, computerTotal);
    }

    toggleButton();
}

const toggleButton = function() {
    document.querySelectorAll("button").forEach(
        function(button) {
            button.disabled = !button.disabled;
        }
    );
}

const guessHigher = function() {
    if (playerTotal > computerTotal) {
        console.log("WINNER");
        houseFunds += playerFunds;
        house.innerHTML = houseFunds;
        
    } else {
        console.log("loser")
        houseFunds -= playerFunds;
        house.innerHTML = houseFunds;
    }
    
    updateFunds();
    buttonToggle();
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

    updateFunds();
    toggleButton();
}

//post func stuff here

updateFunds();

fundsButton.addEventListener("click", addFunds);
roll.addEventListener("click", rollDice);
higher.addEventListener("click", guessHigher);
lower.addEventListener("click", guessLower);
