/* element för manipulation */
var button = document.getElementById("clickerbutton");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var upgradeButtonOne = document.getElementById("upgradeOne");
var upgradeButtonTwo = document.getElementById("upgradeTwo");
var upgradeButtonThree = document.getElementById("upgradeThree")

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lejonClicks = 0;
var upgradeOneCost = 15;
var upgradeTwoCost = 30;
var upgradeThreeCost = 45;
var zebra = null;
var zebraTimer = 0;

/* startvärden */
scoreText.textContent = "Points: 0";
upgradeButtonOne.textContent = "Lejon: " + upgradeOneCost;
upgradeButtonTwo.textContent = "Kors: " + upgradeTwoCost;
upgradeButtonThree.textContent = "Körsbär: " + upgradeThreeCost;

/* click event + logic */
button.addEventListener("click", function() {
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
}, true);

/* kod för första upgraderingen med räknare */
upgradeButtonTwo.addEventListener("click", function() {
	if (bank >= upgradeTwoCost) {
		bank -= upgradeTwoCost;
		clickValue +=1;
		powerText.textContent = "Köpte Kors";
		upgradeTwoCost*= 2;

		upgradeButtonTwo.textContent = "Kors " + upgradeTwoCost;
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	}else {
		powerText.textContent = "Du har inte råd med Kors";
	}
}, true);

// knapp och kod för andra upgraderingen
upgradeButtonOne.addEventListener("click", function() {
	if (bank >= upgradeOneCost) {
		clickValue *= 2;
		bank -= upgradeOneCost;
		upgradeOneCost *= 2;
		upgradeButtonOne.textContent = "Lejon: " + upgradeOneCost;
		powerText.textContent = "Köpte lejon";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med lejon";
	}
}, true);

upgradeButtonThree.addEventListener("click", function() {
	if (bank >= upgradeThreeCost) {
		clickValue *= 2;
		bank -= upgradeThreeCost;
		upgradeThreeCost *= 2;
		upgradeButtonThree.textContent = "körsbär: " + upgradeThreeCost;
		powerText.textContent = "Köpte körsbär";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med körsbär";
	}
}, true);

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.