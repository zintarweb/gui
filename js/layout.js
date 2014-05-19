

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		openSpeed: 'fast'
	});
});

	$(document).ready(function(){
		$(".slidingDiv").hide();
		$(".show_hide").show();
		$('.show_hide').click(function(){
			$(".slidingDiv").slideToggle();
	});
	$(".menu li a").on("click", (function() {$(".slidingDiv").slideToggle()}));
});


