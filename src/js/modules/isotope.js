// --------------------------------------------------------------------------
// Masonry
// --------------------------------------------------------------------------

import Isotope from 'isotope-layout';

$(function() {


	if ( $('.js-isotope-grid').length ) {


	var iso = new Isotope( '.js-isotope-grid', {
		layoutMode: 'fitRows',
		getSortData: {
			director: '.is-director',
			manager:  '.is-manager',
			designer: '.is-designer',
			booker:   '.is-booker',
			printer:  '.is-printer',
			logistic: '.is-logist',
			admin:    '.is-admin',
			leader:   '.is-leader',
			text:     '.is-text'
		},
		filter: '*'
	});





	$('[data-sort-by]').on('click', function(event) {
		
		var sortValue = $(this).attr('data-sort-by');
		iso.arrange({
			filter: sortValue
		})

	});




	$('.js-isotope-autocomplete').on('input', function(event) {

		var valThis = this.value.toLowerCase(),
			valLenght  = this.value.length;

		if( valLenght >= 1) {
			$(this).addClass('is-length');
		}
		else {
			$(this).removeClass('is-length');
		}

		$('.team-user__name').each(function () {

			var text  = $(this).text().toLowerCase();

	            if (text.indexOf(valThis) == 0) {
	            	$(this).closest('.team-grid__item').addClass('is-text');
	            }
	            else {
	            	$(this).closest('.team-grid__item').removeClass('is-text');
	            }

		});


		iso.arrange({
			filter: '.is-text'
		});

		if( $('.js-isotope-grid').height() == 0 ) {
			$('.js-isotope-empty').fadeIn();
		}
		else {
			$('.js-isotope-empty').fadeOut();
		}

	});

	$('.js-isotope-clear').on('click', function(event) {
		event.preventDefault();
		$('.js-isotope-autocomplete').val('');
		$('[data-sort-by="*"]').trigger('click');
	});


	}

});





