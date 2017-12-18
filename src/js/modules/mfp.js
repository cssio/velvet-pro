// --------------------------------------------------------------------------
// Popup Magnific
// --------------------------------------------------------------------------

import magnificPopup from 'magnific-popup';

$(function() {

	$('[data-mfp]').magnificPopup({
		type:'inline',
		mainClass: 'mfp-with-zoom',
		showCloseBtn: false,
		removalDelay: 300,
		zoom: {
		    enabled: true,
		    duration: 300,
		    easing: 'ease-in-out'
		  },
		  overflowY: 'scroll',

		  callbacks: {
		    open: function() {
		    	$('html').addClass('is-lockScroll');
		    	$('.header').css({'margin-right': $('html').css('margin-right') });
		    },
		    close: function() {
		    	$('html').removeClass('is-lockScroll');
		    	$('.header').css({'margin':'0'});
		    }
		  }
	});

	$('[data-mfp-close]').on('click', function(event) {
		event.preventDefault();
		$.magnificPopup.close();
	});


});