console.log("yay!");
		$(document).keydown(function(e) {
	    switch (e.which) {
	    case 37:
	        $('.greenPlayer').stop().animate({
	            left: '-=40'
	        }); //left arrow key
	        break;
	    case 38:
	        $('.greenPlayer').stop().animate({
	            top: '-=40'
	        }); //up arrow key
	        break;
	    case 39:
	        $('.greenPlayer').stop().animate({
	            left: '+=40'
	        }); //right arrow key
	        break;
	    case 40:
	        $('.greenPlayer').stop().animate({
	            top: '+=40'
	        }); //bottom arrow key
	        break;
	    }
	});
		$(document).keydown(function(e) {
	    switch (e.which) {
	    case 65:
	        $('.bluePlayer ').stop().animate({
	            left: '-=40'
	        }); //left arrow key
	        break;
	    case 87:
	        $('.bluePlayer ').stop().animate({
	            top: '-=40'
	        }); //up arrow key
	        break;
	    case 68:
	        $('.bluePlayer ').stop().animate({
	            left: '+=40'
	        }); //right arrow key
	        break;
	    case 83:
	        $('.bluePlayer ').stop().animate({
	            top: '+=40'
	        }); //bottom arrow key
	        break;
	    }
	});