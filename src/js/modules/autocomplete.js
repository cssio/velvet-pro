// --------------------------------------------------------------------------
// Autocomplete
// --------------------------------------------------------------------------

import Autocomplete from 'easy-autocomplete';


$(function() {

	var optionsUsers = {
		data: ['Ширяева Майя', 'Зыкова Элеонора', 'Владимиров Артём', 'Большакова София', 'Юдин Роман', 'Майя Ширяева', 'Элеонора Зыкова', 'Артём Владимиров', 'София Большакова', 'Роман Юдин'],
		list: {	
		    match: {
				enabled: true
		    },
		    onChooseEvent: function(el) {
				console.log("onChooseEvent!");
			}
		}
	};

	$(".js-autocomplete").easyAutocomplete(optionsUsers);


	var optionsNumbers = {
		data: ['1881', '2882', '3883', '4884', '5885', '6886', '7887', '8588', '9886', '10887'],
		list: {	
		    match: {
				enabled: true
		    },
		    onChooseEvent: function(el) {
				console.log("onChooseEvent!");
			}
		}
	};

	$(".js-autocomplete-number").easyAutocomplete(optionsNumbers);

});
