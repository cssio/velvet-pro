// --------------------------------------------------------------------------
// Change
// --------------------------------------------------------------------------

$(function() {
	
	$('.js-change').on('click', '.js-change-open', function(event) {
		event.preventDefault();
		$('.js-change').removeClass('is-open');
		$(this).closest('.js-change').addClass('is-open');
	});

	$('.js-change').on('click', '.js-change-close', function(event) {
		event.preventDefault();
		$(this).closest('.js-change').removeClass('is-open');
	});



});