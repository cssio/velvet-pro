// --------------------------------------------------------------------------
// Range
// --------------------------------------------------------------------------

import ionRangeslider from 'ion-rangeslider';

$(function() {

	$('.js-range-input').ionRangeSlider({
        type: "double",
        from: 0,
        step: 1,
        hide_min_max: true,
        hide_from_to: true,
        force_edges: true,
        grid: false
    });


    $('.js-range-input').on('change', function(event) {
        event.preventDefault();

        var range = $(this),
            rangeData = range.data("ionRangeSlider"),
            rangeDataFrom = range.data("from"),
            rangeDataTo = range.data("to");

        range.closest('.js-range').find('.js-range-from').val(rangeDataFrom)
        range.closest('.js-range').find('.js-range-to').val(rangeDataTo)

    });

});