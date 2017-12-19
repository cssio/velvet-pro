// --------------------------------------------------------------------------
// Collapse
// --------------------------------------------------------------------------

$(function() {
	


	$('.js-collapse').on('click', '.js-collapse-trigger', function(event) {
		event.preventDefault();
		$(this).closest('.js-collapse').toggleClass('is-open').find('.js-collapse-content').slideToggle('fast');
	});




});