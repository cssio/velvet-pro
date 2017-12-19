// --------------------------------------------------------------------------
// Datepicker
// --------------------------------------------------------------------------

import 'air-datepicker';

$(function() {

	$('.js-datepicker').datepicker({
		prevHtml: '<svg class="icon-arrow-left"><use xlink:href="sprites/sprite.svg#icon-arrow-left"></use></svg>',
		nextHtml: '<svg class="icon-arrow-right"><use xlink:href="sprites/sprite.svg#icon-arrow-right"></use></svg>',
		position: 'bottom right',
		autoClose: true
	});

	$('.js-datepicker-inline').datepicker({
		prevHtml: '<svg class="icon-arrow-left"><use xlink:href="sprites/sprite.svg#icon-arrow-left"></use></svg>',
		nextHtml: '<svg class="icon-arrow-right"><use xlink:href="sprites/sprite.svg#icon-arrow-right"></use></svg>',
		position: 'bottom right',
		autoClose: true,
		onSelect(formattedDate, date, inst) {

			// console.log()

			$(inst.$el).closest('.js-datepicker-trigger').removeClass('is-datepickerShow').find('.js-datepicker-input').val(formattedDate);

			event.preventDefault();
			
		}
	});

	$('.js-datepicker-trigger').on('click', function(event) {
		// event.preventDefault();
		$(this).closest('.js-datepicker-trigger').addClass('is-datepickerShow');
	});


	$(document).on('click', function(event) {
        if( $(event.target).closest('.js-datepicker-trigger').length == 0 ) {
			$('.js-datepicker-trigger').removeClass('is-active is-datepickerShow');
        }
    });



	

});