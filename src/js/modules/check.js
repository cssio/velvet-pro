// --------------------------------------------------------------------------
// Check
// --------------------------------------------------------------------------

$(function() {
	
	$('.js-check').on('change', '.js-check-trigger', function(event) {
	
		if ($(this).is(':checked')) {
			$('.js-check-trigger:not(:checked)').closest('.js-check').removeClass('is-open');
			$(this).closest('.js-check').addClass('is-open').find('input').prop({ disabled: false });
		}
		else {
			$(this).closest('.js-check').removeClass('is-open').find('input').prop({ disabled: true });
		}
	});



});