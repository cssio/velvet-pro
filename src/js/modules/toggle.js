// --------------------------------------------------------------------------
// Toggle
// --------------------------------------------------------------------------

$(function() {
	


	$('.js-toggle').each(function() {

		let toggle = $(this),
			toggleContent = $(toggle.data('toggle')),
			toggleClass = toggle.data('toggle-class');

			toggle.on('click', function(event) {
				if ($(this).is('.is-active')) {
					toggle.removeClass('is-active');
					toggleContent.removeClass(toggleClass);
				}
				else {
					toggle.addClass('is-active');
					toggleContent.addClass(toggleClass);
				}
			});

		$(document).on('click', function(event) {
	        if( $(event.target).closest(toggle).length == 0 &&  $(event.target).closest(toggleContent).length == 0 ) {
				$(toggle).removeClass('is-active is-open');
				$(toggleContent).removeClass('is-active is-open');
	        }
	    });

	});




});