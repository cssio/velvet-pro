// --------------------------------------------------------------------------
// Tabs
// --------------------------------------------------------------------------

$(function() {

	if ( $('.js-tabs').length ) {


		var line = $('.js-tabs-btn.is-active'),
			lineWidth = line.width(),
			linePosition = line.position().left;


		$('.js-tabs-line').width(lineWidth).css('left', linePosition);


		$('.js-tabs').on('click', '.js-tabs-btn:not(.is-active)', function() {

			$(this).addClass('is-active')
			.siblings().removeClass('is-active')
			.closest('.js-tabs').find('.js-tabs-panel').removeClass('is-active')
			.eq($(this).index()).addClass('is-active');

			$('.js-tabs-line').stop().animate({
		        left: $(this).position().left,
		        width: $(this).width()
		    }, 'fast');

		});


	}

});
