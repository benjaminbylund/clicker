/* element för manipulation */
var button = document.getElementById("clickerbutton");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var upgradeButtonOne = document.getElementById("upgrade1");
var upgradeButtonTwo = document.getElementById("upgrade2");
var upgradeButtonThree = document.getElementById("upgrade3")
var lejonCounter = document.getElementById("lejonCounter");
var korsCounter = document.getElementById("korsCounter");
var körsbärCounter = document.getElementById("körsbärCounter");

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lejonClicks = 0;
var upgradeOneCost = 15;
var upgradeTwoCost = 30;
var upgradeThreeCost = 45;
var lejonCount = 0;
var korsCount = 0;
var körsbärCount = 0;
var zebra = null;
var zebraTimer = 0;

/* startvärden */
scoreText.textContent = "Points: 0";
lejonCounter.textContent = "Lejon: 0";
korsCounter.textContent = "Kors: 0";
körsbärCounter.textContent = "Körsbär: 0";
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
		korsCount += 1;

		upgradeButtonTwo.textContent = "Kors " + upgradeTwoCost;
		korsCounter.textContent = "Kors: " + korsCount;
		
		kors = setInterval(function(){
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
		lejonCount += 1;

		upgradeButtonOne.textContent = "Lejon: " + upgradeOneCost;
		lejonCounter.textContent = "Lejon: " + lejonCount;

		powerText.textContent = "Köpte Lejon";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med Lejon";
	}
}, true);

upgradeButtonThree.addEventListener("click", function() {
	if (bank >= upgradeThreeCost) {
		clickValue *= 2;
		bank -= upgradeThreeCost;
		upgradeThreeCost *= 2;
		körsbärCount += 1;

		upgradeButtonThree.textContent = "Körsbär: " + upgradeThreeCost;
		körsbärCounter.textContent = "Körsbär: " + körsbärCount;
		powerText.textContent = "Köpte Körsbär";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med Körsbär";
	}
}, true);

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.