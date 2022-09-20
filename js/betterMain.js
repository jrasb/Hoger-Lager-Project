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
const generateRandomNumber = function() {
    return Math.floor(Math.random() * 6) + 1;
}

const addFunds = function() {
    playerFunds += 100;
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds);
}

const decreaseFunds = function() {
    if (playerFunds != 0) {
        playerFunds -= 100;
    } else {
        playerFunds = playerFunds
    }
    currentFunds.innerHTML = playerFunds;
    console.log(playerFunds)
}

const doubleFunds = function() {
    playerFunds *= 2;
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

const hideDice = function() {
    document.querySelectorAll(".computer-dice > div").forEach(
        (element) => {
            element.className = "dice-state-unknown";
        }
    );
}

const rollDice = function() {
    playerTotal = 0;
    computerTotal = 0;

    while (playerTotal === computerTotal) {
        playerDice = [generateRandomNumber(), generateRandomNumber()]
        computerDice = [generateRandomNumber(), generateRandomNumber()];

        playerTotal = playerDice[0] + playerDice[1];
        computerTotal = computerDice[0] + computerDice[1];
        //console.log(playerTotal, computerTotal);
    }

    document.querySelectorAll(".player-dice > div").forEach(
        (element, index) => {
            element.className = "dice-state-" + playerDice[index]; 
        }
    );

    hideDice();
    toggleButton();
}

const revealDice = function() {
    document.querySelectorAll(".computer-dice > div").forEach(
        (element, index) => {
            element.className = "dice-state-" + computerDice[index]; 
        }
    );
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