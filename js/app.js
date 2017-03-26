// This function checks for a winner by running after each keystroke and checking relative position.
var body1 = $('.body1').position().left;
var body2 = $('.body2').position().left;

var checkForWin = function(){ 
	console.log("Checking for Wins!");
	if(body1 >= '400') {
		alert("Player 2 Wins!");
	} else if (body2 >= '400') {
			alert("Player 1 Wins!");
		} else {

		}
}

console.log("yay!");
		$(document).keydown(function(e) {
	    switch (e.which) {
	    case 38:
	        $('.body2').stop().animate({
	            top: '-=40'
	        }); 
	        break;
	    case 39:
	        $('.body2').stop().animate({
	            left: '+=40'
	        });
	        	body2 = $('.body2').position().left;
	        	checkForWin();
	        break;
	    case 40:
	        $('.body2').stop().animate({
	            top: '+=40'
	        }); 
	        break;
	    }
	});
		$(document).keydown(function(e) {
	    switch (e.which) {
	    case 87:
	        $('.body1 ').stop().animate({
	            top: '-=40'
	        }); 
	        break;
	    case 68:
	        $('.body1 ').stop().animate({
	            left: '+=40'
	        });
	        	body1 = $('.body1').position().left; 
	        	checkForWin();
	        break;
	    case 83:
	        $('.body1 ').stop().animate({
	            top: '+=40'
	        }); 
	        break;
	    }
	});