//signup.js 
// add your JavaScript code to this file

//document ready function
$(function(){
	var stateSelect = $('.us-states');

	//grabs all the states from us-states.js
	//puts them into option tags for the select
	//drop down menu
	$.each(usStates, function(){
		var option = $(document.createElement('option'));
		option.attr('value', this.abbreviation);
		option.html(this.name);
		stateSelect.append(option);
	});

	//form field validations
	//if address is there, zip code is required
	$('.signup-form').submit(function(){
		var signupForm = $(this);
		var addrInput = signupForm.find('input[name="addr-1"]');
		var addrValue = addrInput.val();

		//checks if the address value is greater than 0
		if (addrValue.length > 0) {
			var zip = signupForm.find('input[name="zip"]');
			var zipValue = zip.val();
			if (zipValue == 0) {
				alert('Please enter in a zip code');
				return false;
			}
		}
	});

	//creates the onclick event for the No Thanks
	//button. Brings a pop up asking if the user
	//really wants to leave.
	$('.cancel-signup').click(function(){
		$('.cancel-signup-modal').modal();
	});

	//creates an onclick event and redirects user to
	//google
	$('.btn-abandon').click(function(){
		window.location = 'http://www.google.com';
	});

	//This function checks everytime the select
	//button with the name refer changes
	$('select[name="refer"]').change(function(){
		var referSelect = $(this);
		var otherInput = $('[name="refer-other"]');

		//checks if refer select's value in lowercase
		//is equal to "other"..
		if ('other' === referSelect.val().toLowerCase()) {
			otherInput.removeAttr('disabled');
			otherInput.show();
			otherInput.focus();
		} else {
			otherInput.attr('disabled', true);
			otherInput.hide();
		}
	});
});