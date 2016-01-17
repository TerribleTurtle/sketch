var gridHeight = 16;
var gridWidth = 16;
var childCounter = 1;

$(document).ready(function() {
	function makeGrid(){

		for (var i = 0; i < gridHeight; i++){
			$('#container').append("<ul class='list'></ul>");	
		}
		for (var y = 0; y < gridHeight; y++ ) {
			for (x = 0; x < gridWidth; x++) {
				$('ul:nth-child(' +childCounter+')').append('<li class="box"></li>');
			} childCounter++;
		}
	};
	makeGrid();

	

	
	

	$('button[name="new_grid"').click(function(){
		gridHeight = prompt('New Grid Height?');
		gridWidth = prompt('New Grid Height?');
		$('.list').remove();
		childCounter =1;
		makeGrid();
		$('li').hover(function() {
		$(this).removeClass('box');
		$(this).addClass('redBox');
	});
		//$('li').removeClass('redBox');
		//$('li').addClass('box');
	});

	$('li').hover(function() {
		$(this).removeClass('box');
		$(this).addClass('redBox');
	});



	
	

	
	
});