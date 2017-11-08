// I actually made for all form-things a variable, but some problems occured and changed it back
// (I think I overdid it when changing the event-name to variable-name something like [$('#firstName').blur(function() {...} --> firstName.blur(function() {...}])
// hide textfield && email error && disable button
let emailMan = $('#emailMandatory').hide();
let otherMedia = $('#otherMediaChannel').hide();

let firstNameMan = $('#firstNameMandatory');
let lastNameMan = $('#lastNameMandatory');

let submitButton = $(':input[type="submit"]').prop("disabled", true);



// all the events
// I took blur, because I think it is better to ask when the user changed it ad not when user is currently writing
// checks firstname-field
$('#firstName').blur(function() {
    if(!$(this).val()) {
        firstNameMan.show();
    } 
    else {
        firstNameMan.hide();
    }

    checkSubmit();
});

// checks lastname-field
$('#lastName').blur(function() {
    if(!$(this).val()) {
        lastNameMan.show();
    }
    else {
        lastNameMan.hide();
    }

    checkSubmit();
});

// checks email-field
$('#email').blur(function() {
    checkEmail();
});

// checks newsletter-checkbox
$('#newsletter').on("click", function() {
    checkEmail();
});

// checks if emailMandatory should be shown or not
function checkEmail() {
    if($('#newsletter').is(':checked') && !$('#email').val()) {
        emailMan.show();
    } 
    else {
        emailMan.hide();
    }

    checkSubmit();
}

//check optional selection
$('#mediaChannelSelect').on("change", function () {
    if ($('#mediaChannelSelect option:selected').text() === 'Other') {
        otherMedia.show();
    } 
    else {
        otherMedia.hide();
    }
});

// checks if submit button should be enabled or disabled
function checkSubmit() {
    if(firstNameMan.is(":hidden") && lastNameMan.is(":hidden") && emailMan.is(":hidden")) {
        submitButton.prop("disabled", false);
    } 
    else {
        submitButton.prop("disabled", true);
    }
}