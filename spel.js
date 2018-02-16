/* element för manipulation */
var button = document.getElementById("clickerbutton");
var upgradeButtonOne = document.getElementById("upgradeOne");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var upgradeButtonTwo = document.getElementById("upgradeTwo");

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var upgradeOneCost = 15;
var lejonClicks = 0;
var upgradeCostTwo = 30;
var zebra = null;
var zebraTimer = 0;

/* startvärden */
scoreText.textContent = "Points: 0";
upgradeButtonOne.textContent = "Lejon: " + upgradeOneCost;
upgradeButtonTwo.textContent = "Zebra: " + upgradeCostTwo;

/* click event + logic */
button.addEventListener("click", function() {
	// kontrollera om vi har ett lejon aktivt, annars återställ clickValue
	if (lejonClicks > 0) {
		lejonClicks--;
	} else if (lejonClicks == 0) {
		clickValue = 1;		
	}
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
}, true);

/* kod för första upgraderingen med räknare */
upgradeButtonOne.addEventListener("click", function() {
	if (bank >= upgradeCostTwo && zebraTimer == 0) {
		bank -= upgradeCostTwo;
		zebraTimer += 10;
		powerText.textContent = "Köpte zebra";

		// Lägg till setInterval med en funktion som laddas varje sekund
		zebra = setInterval(function() {
			bank += 10;
			scoreText.textContent = "Points: " + bank;
			zebraTimer--;

			if (zebraTimer == 0) {
				powerText.textContent = "Slut på zebra";
				clearInterval(zebra);  // kalla på clearInterval för att rensa setInterval
			}
		}, 1000);
	} else if (zebraTimer > 0) {
		powerText.textContent = "Du har redan zebra";
	} else {
		powerText.textContent = "Du har inte råd med zebra";
	}
}, true);

// knapp och kod för andra upgraderingen
upgradeButtonTwo.addEventListener("click", function() {
	if (bank >= upgradeOneCost) {
		clickValue *= 2;
		bank -= upgradeOneCost;
		upgradeOneCost *= 2;
		lejonClicks += 10;
		upgradeButtonOne.textContent = "Lejon: " + upgradeOneCost;
		powerText.textContent = "Köpte lejon";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
	} else {
		powerText.textContent = "Du har inte råd med lejon";
	}
}, true);

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.