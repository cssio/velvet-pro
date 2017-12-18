// --------------------------------------------------------------------------
// Timeline
// --------------------------------------------------------------------------

import owlCarousel from 'owl.carousel';

$(function() {

	$('.js-timeline-carousel').owlCarousel({
	    loop: false,
	    rewind: false,
	    margin: 10,
	    nav: false,
	    autoWidth: true,
	    lazyContent: true,
	    lazyLoad: true,
	    items: 5
	});


});