// --------------------------------------------------------------------------
// Nav
// --------------------------------------------------------------------------

$(function() {

	$('.nav').on('click', '.nav__trigger', function(event) {
		event.preventDefault();
		if ($('html').is('.is-navOpen')) {
			$('html').removeClass('is-navOpen');
		}
		else {
			$('html').addClass('is-navOpen');
		}
	});

	$('.nav__overlay').on('click', function(event) {
		event.preventDefault();
		$('html').removeClass('is-navOpen');
	});



});