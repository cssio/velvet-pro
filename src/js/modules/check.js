// --------------------------------------------------------------------------
// Check
// --------------------------------------------------------------------------

$(function() {
	
	$('.js-check').on('change', '.js-check-trigger', function(event) {
	
		if ($(this).is(':checked')) {
			$('.js-check').removeClass('is-open');
			$(this).closest('.js-check').addClass('is-open');
		}
		else {
			$(this).closest('.js-check').removeClass('is-open');
		}
	});



});