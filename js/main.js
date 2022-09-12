let spelerTotal;
let computerTotal;  
let currentFunds = 0;
let netGain

const RNG = function() {
    spelerTotal = 0;
    computerTotal = 0;
    
    while (spelerTotal === computerTotal) {
        let SD1 = Math.floor(Math.random() * 6) +1;
        let SD2 = Math.floor(Math.random() * 6) +1;
        let CD1 = Math.floor(Math.random() * 6) +1;
    	let CD2 = Math.floor(Math.random() * 6) +1;

		spelerTotal = SD1 + SD2;
		computerTotal = CD1 + CD2;
		console.log(spelerTotal, computerTotal);
    }

    buttonToggle();
}

const addFunds = function() {
    console.log("foo");
    currentFunds += 100;
    console.log(currentFunds);
}



const buttonToggle = function() {
    document.querySelectorAll(".buttons button").forEach(
        function(button) {
            button.disabled = !button.disabled;
        }
    );
}

const higher = function() {
    if (spelerTotal > computerTotal) {
        console.log("WINNER");

    } else {
		console.log("loser")
	}

    buttonToggle();

}

const lower = function() {
    //console.log("lager test")
    if (spelerTotal < computerTotal) {
        console.log("WINNER");
    } else {
		console.log("loser")
	}

    buttonToggle();
}

/*
addEventListener("DOMContentLoaded", function() {
	RNG();
});
*/