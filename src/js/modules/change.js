// --------------------------------------------------------------------------
// Change
// --------------------------------------------------------------------------

$(function() {
	
	$('.js-change').on('click', '.js-change-open', function(event) {
		event.preventDefault();
		$('.js-change').removeClass('is-open');
		$(this).closest('.js-change').addClass('is-open');
	});

	$('.js-change').on('click', '.js-change-close, .js-change-cancel, .js-change-save', function(event) {
		event.preventDefault();
		$(this).closest('.js-change').removeClass('is-open').find('.js-change-input').prop({ disabled: true });
	});


	// -----


	$('.js-change').on('click', '.js-change-trigger', function(event) {
		event.preventDefault();
		$('.js-change').removeClass('is-open');
		$(this).closest('.js-change').addClass('is-open').find('.js-change-input').prop({ disabled: false });
	});



	// -----


	$('.js-change-save').on('click', function(event) {
		event.preventDefault();
		alert('Save!')
	});


	$('.js-change-delete').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.js-change').fadeOut('fast', function() {
			$(this).remove();
			alert('Delete!')
		});

		
	});




});