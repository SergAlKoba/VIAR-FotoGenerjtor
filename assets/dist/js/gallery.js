$(document).ready(function(){

    $(".tabs-title ul").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top -100;
		$('body,html').animate({scrollTop: top}, 1000);
	});

});

$(window).resize(function(){

    

});
