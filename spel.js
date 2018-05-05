
/* element för manipulation */
var button = document.getElementById("clickerbutton");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");

var upgradeButtonOne = document.getElementById("upgrade1");
var upgradeButtonTwo = document.getElementById("upgrade2");
var upgradeButtonThree = document.getElementById("upgrade3");
var upgradeButtonFour = document.getElementById("upgrade4");
var upgradeButtonFive = document.getElementById("upgrade5");
var upgradeButtonSix = document.getElementById("upgrade6");

var lejonCounter = document.getElementById("lejonCounter");
var korsCounter = document.getElementById("korsCounter");
var körsbärCounter = document.getElementById("körsbärCounter");
var grönDiamantCounter = document.getElementById("grönDiamantCounter");
var lilaDiamantCounter = document.getElementById("lilaDiamantCounter");
var tärningarCounter = document.getElementById("tärningarCounter");

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lejonClicks = 0;
var upgradeOneCost = 15;
var upgradeTwoCost = 30;
var upgradeThreeCost = 45;
var upgradeFourCost = 60;
var upgradeFiveCost = 80;
var upgradeSixCost = 100;

var lejonCount = 0;
var korsCount = 0;
var körsbärCount = 0;
var grönDiamantCount = 0;
var lilaDiamantCount = 0;
var tärningCount = 0;

var zebra = null;
var zebraTimer = 0;

/* startvärden */
scoreText.textContent = "Points: 0";

lejonCounter.textContent = "Lejon: 0";
korsCounter.textContent = "Kors: 0";
körsbärCounter.textContent = "Körsbär: 0";
grönDiamantCounter.textContent = "Diamant(grön): 0";
lilaDiamantCounter.textContent = "Diamant(lila): 0";
tärningarCounter.textContent = "Tärningar: 0";

upgradeButtonOne.textContent = "Lejon: " + upgradeOneCost;
upgradeButtonTwo.textContent = "Kors: " + upgradeTwoCost;
upgradeButtonThree.textContent = "Körsbär: " + upgradeThreeCost;
upgradeButtonFour.textContent = "Diamant: " + upgradeFourCost;
upgradeButtonFive.textContent = "Diamant: " + upgradeFiveCost;
upgradeButtonSix.textContent = "Tärningar: " + upgradeSixCost;

/* click event + logic */
button.addEventListener("click", function() {
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
}, true);

/* kod för andra upgraderingen med räknare */
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

// knapp och kod för första upgraderingen
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


upgradeButtonFour.addEventListener("click", function() {
	if (bank >= upgradeFourCost) {
		clickValue *= 2;
		bank -= upgradeFourCost;
		upgradeFourCost *= 2;
		grönDiamantCount += 1;

		upgradeButtonFour.textContent = "Diamant: " + upgradeFourCost;
		grönDiamantCounter.textContent = "Diamant: " + grönDiamantCount;
		powerText.textContent = "Köpte Grön Diamant";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med en Grön Diamant";
	}
}, true);


upgradeButtonFive.addEventListener("click", function() {
	if (bank >= upgradeFiveCost) {
		clickValue *= 2;
		bank -= upgradeFiveCost;
		upgradeFiveCost *= 2;
		lilaDiamantCount += 1;

		upgradeButtonFive.textContent = "Diamant: " + upgradeFiveCost;
		lilaDiamantCounter.textContent = "Diamant: " + lilaDiamantCount;
		powerText.textContent = "Köpte Lila Diamant";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med en Lila Diamant";
	}
}, true);

upgradeButtonSix.addEventListener("click", function() {
	if (bank >= upgradeSixCost) {
		clickValue *= 2;
		bank -= upgradeSixCost;
		upgradeSixCost *= 2;
		tärningCount += 1;

		upgradeButtonSix.textContent = "Tärningar: " + upgradeSixCost;
		tärningarCounter.textContent = "Tärningar: " + tärningCount;
		powerText.textContent = "Köpte Tärningar";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
		
		zebra = setInterval(function(){
			bank +=2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);

	} else {
		powerText.textContent = "Du har inte råd med Tärningar";
	}
}, true);
scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.