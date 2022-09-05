let spelerTotal;
let computerTotal;  

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

    return spelerTotal, computerTotal;
}

function disableElement() {
    document.getElementById("higher").disabled = true;
}

function higher() {
    //console.log("hoger Test")
    if (spelerTotal > computerTotal) {
        console.log("WINNER");
    } else {
		console.log("loser")
	}
}

function lower() {
    //console.log("lager test")
    if (spelerTotal < computerTotal) {
        console.log("WINNER");
    } else {
		console.log("loser")
	}
}

addEventListener("DOMContentLoaded", function() {
	RNG();
});
