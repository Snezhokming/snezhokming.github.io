// scroll to
jQuery(function($){
	$('body').on('click', '.scrollto', function(evt){
		evt.preventDefault();
		var selected = $(this).attr('href');
		$.scrollTo(selected, 750);
	});
});
// end scroll to

// icon burger
$(document).ready(function(){
	$('.icon-burger').click(function(){
		$(this).toggleClass('open');
	});
});

jQuery(function($){
	$('.mobile-menu > .icon-burger').click(function(){
		$(this).toggleClass('active');
		$(this).next('nav').slideToggle();
	});
});
// end icon burger

// kwicks
$(function() {
	$('.kwicks').kwicks({
		maxSize: '70%',
		behavior: 'menu',
		spacing: '0px'
	});
});
// end kwicks