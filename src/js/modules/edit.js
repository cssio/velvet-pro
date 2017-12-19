// --------------------------------------------------------------------------
// Edit
// --------------------------------------------------------------------------

$(function() {
	
	$('.js-edit').on('click', '.js-edit-trigger', function(event) {
		event.preventDefault();
		$('.js-edit').removeClass('is-open');
		$(this).closest('.js-edit').addClass('is-open').find('.js-edit-input').prop({ disabled: false });
	});

	$('.js-edit').on('click', '.js-edit-cancel, .js-edit-save', function(event) {
		event.preventDefault();
		$(this).closest('.js-edit').removeClass('is-open').find('.js-edit-input').prop({ disabled: true });
	});


	// // -----


	// $('.js-change').on('click', '.js-change-trigger', function(event) {
	// 	event.preventDefault();
	// 	$('.js-change').removeClass('is-open');
	// 	$(this).closest('.js-change').addClass('is-open').find('.js-change-input').prop({ disabled: false });
	// });



	// // -----


	// $('.js-change-save').on('click', function(event) {
	// 	event.preventDefault();
	// 	alert('Save!')
	// });


	// $('.js-change-delete').on('click', function(event) {
	// 	event.preventDefault();
	// 	$(this).closest('.js-change').fadeOut('fast', function() {
	// 		$(this).remove();
	// 		alert('Delete!')
	// 	});

		
	// });




});