// --------------------------------------------------------------------------
// Timeline
// --------------------------------------------------------------------------

import owlCarousel from 'owl.carousel';

$(function() {

	$('.js-timeline-carousel').owlCarousel({
	    loop: false,
	    rewind: false,
	    margin: 10,
	    nav: true,
	    items: 5,
	    lazyContent: true,
	    dots: true,
	    dotsEach: true,
	    autoHeight: true,
	    dotsContainer: '.js-timeline-ctrl',
	    navText: ['<svg class="icon-prev"><use xlink:href="sprites/sprite.svg#icon-prev"></use></svg>','<svg class="icon-next"><use xlink:href="sprites/sprite.svg#icon-next"></use></svg>'],
	    responsive:{
	        0:{
	            items: 1,
	            dots: true,
	            autoHeight: true
	        },
	        768:{
	            items: 5,
	            dots: false,
	            autoHeight: false,
	            autoWidth: true
	        }
	    }
	});



	$('.js-timeline-ctrl').on('click', '.js-timeline-btn', function(event) {
        event.preventDefault();
        var index = $(this).index();
        $('.js-timeline-carousel').trigger('to.owl.carousel', [index, 400, true]);

    });


});