// display rules in html

// * The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120.
		// need math.random function and store to variable
		// use .html method to display on page

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// * Your game will hide this amount until the player clicks a crystal.
// Each crystal should have a random hidden value between 1 - 12.
// * When they do click one, update the player's score counter.
		// need math.random function for each crystal and store in variables
		//assign a random number to each crystal (look at fridge exercise using .data from Saturday's class)
		// on click function will add random number to player score

// * The player wins if their total score matches the random number from the beginning of the game.
// * The player loses if their score goes above the random number.
		// design end game function to determine win or loss (use if else on each button to compare user score vs comp score)

// * The game restarts whenever the player wins or loses.
// * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
		// start function resets score...
		// and generates new random numbers

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
	//

// to gen random number within specified range : (max-min+1) + min
$(document).ready(function() {
	
	var randomComputerNum = Math.floor(Math.random() * 102) + 19;
	var blueRandomNum = Math.floor(Math.random() * 12) + 1;
	var pinkRandomNum = Math.floor(Math.random() * 12) + 1;
	var greenRandomNum = Math.floor(Math.random() * 12) + 1;
	var purpleRandomNum = Math.floor(Math.random() * 12) + 1;
	var CompScore = randomComputerNum;
	var userScore = 0;
	var winCount = 0;
	var lossCount = 0;

	function start() {
		

	}

//button click functions
	$("#button1").on("click", function() {
		userScore += randomTreatNum;

		console.log(userScore);
	});

	$("#button2").on("click", function() {
		userScore += randomTreatNum;

		console.log(userScore);
	});

	$("#button3").on("click", function() {
		userScore += randomTreatNum;

		console.log(userScore);
	});

	$("#button4").on("click", function() {
		userScore += randomTreatNum;

		console.log(userScore);
	});

//game over function	
	function gameOver() {
		

	}






});




