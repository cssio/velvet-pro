// --------------------------------------------------------------------------
// Datepicker
// --------------------------------------------------------------------------

import 'air-datepicker';

$(function() {

	$('.js-datepicker').datepicker({
		prevHtml: '1',
		nextHtml: '2',
		position: 'bottom right',
		autoClose: true
	});

});