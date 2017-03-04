$(document).ready(function() {	
	var bearButton = $("");
	var randomComputerNum = 0;
	var bearsObj = {
		color: ["red", "yellow", "green", "orange"],
		points: [],
	};
	var winCount = 0;
	var lossCount = 0;
	var userScore = 0;
	var endGameDiv = $("");

//this function makes the gummy bears- creates buttons for each of the four bears inside the div #bear-button-div, assigns the class bear-button, and assigns an id for assigning a different # of points to each bear	
function gummyBearCreator () {
	for (var i = 0; i<bearsObj.color.length; i++) {
		bearButton = $ ("<button>");
		$(bearButton).attr('class', 'bear-button');
		$(bearButton).attr('id', bearsObj.color[i]+'-'+'bear-button');
		$(bearButton).append('<img src="assets/images/' + bearsObj.color[i] + '.png"/>');
		$("#bear-button-div").append(bearButton);
	};
};
gummyBearCreator();

//start&reset function- sets user score to 0, generates random computer number, generates random point values for gummy bears
	function start () {
		userScore = 0;
		$("#user-score").text(userScore);

		randomComputerNum = Math.floor(Math.random() * 102) + 19;
		$("#computer-score").text(randomComputerNum);

		bearsObj.points=[];

		$(".bear-button").css("visibility", "");
		endGameDiv.empty();

		for (var i = 0; i<bearsObj.color.length; i++) {
			var randomBearNum = Math.floor(Math.random() * 12) + 1;
			bearsObj.points.push(randomBearNum);	
		};

		console.log('Computer Num: '+ randomComputerNum);
		console.log('Bear Nums: '+ bearsObj.points);
	};

start ();

//button click functions start here
	
	// toggles game instructions when user clicks on How to Play button
	$("#button").on("click", function() {
  		$("#instructions-text").toggle();
	});
	//bear click functions - assigns random point value with each game and updates user score when clicked, also calls game over function to compare scores on each click
	$("#red-bear-button").on("click", function() {
		var blueRandomPts = bearsObj.points[0];
		userScore += blueRandomPts;
		$("#user-score").html(userScore);
		gameOver();
	});

	$("#yellow-bear-button").on("click", function() {
		var pinkRandomPts = bearsObj.points[1];
		userScore += pinkRandomPts;
		$("#user-score").html(userScore);
		gameOver();
	});

	$("#green-bear-button").on("click", function() {
		var greenRandomPts = bearsObj.points[2];
		userScore += greenRandomPts;
		$("#user-score").html(userScore);
		gameOver();
	});

	$("#orange-bear-button").on("click", function() {
		var purpleRandomPts = bearsObj.points[3];
		userScore += purpleRandomPts;
		$("#user-score").html(userScore);
		gameOver();
	});

//game over function - compares user score vs computer score to determine win or loss, if win/loss is determined it calls the start function to restart game and updates win/loss counters
	function gameOver() {

		if (userScore === randomComputerNum) {
			winCount++;
			$("#win-count").html(winCount);
			$(".bear-button").css("visibility", "hidden");
			//display happy emoji on win
			endGameDiv = $('<div>');
			$(endGameDiv).append('<img src="assets/images/win.svg"/>');
			$(endGameDiv).attr('class', 'win-lose-img');
			$("#bear-button-div").append(endGameDiv);
			setTimeout(start, 1500);
		
		}else if (userScore > randomComputerNum) {
			lossCount++;
			$("#loss-count").html(lossCount);
			$(".bear-button").css("visibility", "hidden");
			//display sad emoji on lose
			endGameDiv = $('<div>');
			$(endGameDiv).append('<img src="assets/images/lose.svg"/>');
			$(endGameDiv).attr('class', 'win-lose-img');
			$("#bear-button-div").append(endGameDiv);
			setTimeout(start, 1500);
		}
	};

});




