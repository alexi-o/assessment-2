// This function checks for a winner by running after each keystroke and checking relative position.
var checkForWin = function(){ 
	console.log("Checking for win!");
	if($('.orangeCar').css('left') === '400') {
		alert("Blue wins!");
	} else if ($('.greenCar').css('left') === '400') {
			alert("Green wins!");
		} else {

		}
}

var car1X = $('.orangeCar').offset('left');
var car2X = $('.greenCar').offset('left');

console.log("yay!");
		$(document).keydown(function(e) {
	    switch (e.which) {
	    case 38:
	        $('.greenCar').stop().animate({
	            top: '-=40'
	        }); 
	        break;
	    case 39:
	        $('.greenCar').stop().animate({
	            left: '+=40'
	        });
	        	checkForWin(); 
	        break;
	    case 40:
	        $('.greenCar').stop().animate({
	            top: '+=40'
	        }); 
	        break;
	    }
	});
		$(document).keydown(function(e) {
	    switch (e.which) {
	    case 87:
	        $('.orangeCar ').stop().animate({
	            top: '-=40'
	        }); 
	        break;
	    case 68:
	        $('.orangeCar ').stop().animate({
	            left: '+=40'
	        });
	        	checkForWin(); 
	        break;
	    case 83:
	        $('.orangeCar ').stop().animate({
	            top: '+=40'
	        }); 
	        break;
	    }
	});