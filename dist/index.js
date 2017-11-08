"use strict";
// all form variables
// hide textfield && email error && disable button
var emailMan = $('#emailMandatory').hide();
var otherMedia = $('#otherMediaChannel').hide();
var firstNameMan = $('#firstNameMandatory');
var lastNameMan = $('#lastNameMandatory');
var submitButton = $(':input[type="submit"]').prop("disabled", true);
// all the events
// checks firstname-field
$('#firstName').blur(function () {
    if (!$(this).val()) {
        firstNameMan.show();
    }
    else {
        firstNameMan.hide();
    }
    checkSubmit();
});
// checks lastname-field
$('#lastName').blur(function () {
    if (!$(this).val()) {
        lastNameMan.show();
    }
    else {
        lastNameMan.hide();
    }
    checkSubmit();
});
// checks email-field
$('#email').blur(function () {
    checkEmail();
});
// checks newsletter-checkbox
$('#newsletter').on("click", function () {
    checkEmail();
});
// checks if emailMandatory should be shown or not
function checkEmail() {
    if ($('#newsletter').is(':checked') && !$('#email').val()) {
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
// checks if submit button should be enables or disabled
function checkSubmit() {
    if (firstNameMan.is(":hidden") && lastNameMan.is(":hidden") && emailMan.is(":hidden")) {
        submitButton.prop("disabled", false);
    }
    else {
        submitButton.prop("disabled", true);
    }
}
