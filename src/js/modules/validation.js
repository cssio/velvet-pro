// --------------------------------------------------------------------------
// Validation
// --------------------------------------------------------------------------


import 'jquery-validation';

$(function() {



	var validateErrorPlacement = function(error, element) {
		error.addClass('.form-validate-text');
		error.appendTo(element.closest('.form-group'));
	}

	var validateHighlight = function(element) {
		$(element).closest('.form-group').addClass("is-error");

	}
	var validateUnhighlight = function(element) {
		$(element).closest('.form-group').removeClass("is-error");

	}


	var validation = $('.js-validate').validate({
		errorPlacement: validateErrorPlacement,
	    highlight: validateHighlight,
	    unhighlight: validateUnhighlight,
		errorClass: 'is-error',
		validClass: 'is-success',
		ignore: ":disabled,:hidden",
		rules: {
			orgName: {
				required: true
			},
			orgPosition: {
				required: true
			},
			firstName: {
				required: true
			},
			lastName: {
				required: true
			},
			middleName: {
				required: true
			},

			email: {
		    	required: true,
		    	email: true
			},

			password: {
				required: true,
				minlength: 6
			},
			passwordConfirm: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			},
			role: {
		    	required: true
			}
		},
		errorPlacement: function(error,element) {
		    return true;
		},
		submitHandler: function() {
			alert('Submit!')

		}

	});




});