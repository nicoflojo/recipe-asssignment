// Prep semantics 

$(document).ready(function() {
  console.log("Script included!");
});

// Ingredients Strikethrough Script

$(function(e) {
	$('li').on('click', function() {
		$(this).toggleClass('stroked');
		 	return false;
	});
});

// strike-through directions

$(function(e) {
	$('.text p').on('click', function() {
		$(this).toggleClass('stroked');
		 	return false;
	});
});

// hide photos on click 

$(function(e) {
	$('.photo img').on('click', function() {
		$(this).hide();
	});
});
