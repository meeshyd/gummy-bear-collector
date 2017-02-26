// global variables
var userScore = 0;
var winCount = 0;
var lossCount = 0;
var randomComputerNum = 0;
var randomComputerNum = 0;
var blueRandomNum = 0;
var pinkRandomNum = 0;
var greenRandomNum = 0;
var purpleRandomNum = 0;

$(document).ready(function() {

// begins game by refreshing the user's score and generating new random number for computer score and the buttons
	function start() {
		
		userScore = 0;
		$("#user-score").html(userScore);

		randomComputerNum = Math.floor(Math.random() * 102) + 19;
		blueRandomNum = Math.floor(Math.random() * 12) + 1;
		pinkRandomNum = Math.floor(Math.random() * 12) + 1;
		greenRandomNum = Math.floor(Math.random() * 12) + 1;
		purpleRandomNum = Math.floor(Math.random() * 12) + 1;
		// console.log ('computer number:'+randomComputerNum);
		// console.log ('blue number:'+ blueRandomNum);
		// console.log ('pink number:'+ pinkRandomNum);
		// console.log ('green number:'+ greenRandomNum);
		// console.log ('purple number:'+ purpleRandomNum);

		$("#computer-score").html(randomComputerNum);
	};

//button click functions
	// toggles game instructions when user clicks on How to Play button
	$(".instructions-button").on("click", function() {
  		$(".instructions-text").toggle();
	});
	
	$("#blue-bear-button").on("click", function() {
		userScore += blueRandomNum;
		$("#user-score").html(userScore);
		gameOver();
		console.log(userScore);
	});

	$("#pink-bear-button").on("click", function() {
		userScore += pinkRandomNum;
		$("#user-score").html(userScore);
		gameOver();
		console.log(userScore);
	});

	$("#green-bear-button").on("click", function() {
		userScore += greenRandomNum;
		$("#user-score").html(userScore);
		gameOver();
		console.log(userScore);
	});

	$("#purple-bear-button").on("click", function() {
		userScore += purpleRandomNum;
		$("#user-score").html(userScore);
		gameOver();
		console.log(userScore);
	});

//game over function	
	function gameOver() {

		if (userScore === randomComputerNum) {
			alert("You win!");
			winCount++;
			$("#win-count").html(winCount);
			start();
		}
		else if (userScore > randomComputerNum) {
			alert("You lose!");
			lossCount++;
			$("#loss-count").html(lossCount);
			start();
		}
	}

start ();

});




