$(document).ready(function() {	
	var bearButton = $("");
	var randomComputerNum = 0;
	var bearsObj = {
		color: ["blue", "pink", "green", "purple"],
		points: [],
	};
	var winCount = 0;
	var lossCount = 0;
	var userScore = 0;

	for (var i = 0; i<bearsObj.color.length; i++) {
		bearButton = $ ("<button>");
		$(bearButton).attr('class', 'bear-button');
		$(bearButton).attr('id', bearsObj.color[i]+'-'+'bear-button');
		$(bearButton).append('<img src="assets/images/' + bearsObj.color[i] + '.png"/>');
		$(bearButton).attr('points',bearsObj.points[i]);
		$("#bear-button-div").append(bearButton);
	};

	function start () {
		userScore = 0;
		$("#user-score").text(userScore);

		randomComputerNum = Math.floor(Math.random() * 102) + 19;
		$("#computer-score").text(randomComputerNum);

		bearsObj.points=[];

		var randomBearNum = [
			Math.floor(Math.random() * 12) + 1,
			Math.floor(Math.random() * 12) + 1,
			Math.floor(Math.random() * 12) + 1,
			Math.floor(Math.random() * 12) + 1,
		];
		for (var i = 0; i<bearsObj.color.length; i++) {
			bearsObj.points.push(randomBearNum[i]);	
		};

		console.log('Computer Num: '+ randomComputerNum);
		console.log('Bear Nums: '+ bearsObj.points);
	};

start ();

//button click functions
	
// toggles game instructions when user clicks on How to Play button
	$("#instructions-button").on("click", function() {
  		$("#instructions-text").toggle();
	});
	
	$("#blue-bear-button").on("click", function() {
		var blueRandomPts = bearsObj.points[0];
		userScore += blueRandomPts;
		$("#user-score").html(userScore);
		gameOver();
	});

	$("#pink-bear-button").on("click", function() {
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

	$("#purple-bear-button").on("click", function() {
		var purpleRandomPts = bearsObj.points[3];
		userScore += purpleRandomPts;
		$("#user-score").html(userScore);
		gameOver();
	});

//game over function	
	function gameOver() {

		if (userScore === randomComputerNum) {
			alert("You win!");
			winCount++;
			$("#win-count").html(winCount);
			start();
		}else if (userScore > randomComputerNum) {
			alert("You lose!");
			lossCount++;
			$("#loss-count").html(lossCount);
			start();
		}
	};

});




