/* Matthew Spooner. 8/6/2024. */
const submitButton = document.getElementById("submit-button");
const firstNameInput = document.getElementById("firstName-target");
const lastNameInput = document.getElementById("lastName-target");
const emailInput = document.getElementById("email-target");
const myForm = document.getElementById("form-target");
const resetButton = document.getElementById("reset-button");
const returnButton = document.getElementById("return-button");

document.onload = welcomeAlert();
submitButton.addEventListener("click", trySubmitForm);
resetButton.addEventListener("click", formReset);
returnButton.addEventListener("click", returnToWebsite);

function welcomeAlert() {
  alert("Welcome to Very Bright Solar!\n\nClose this pop-up to proceed to the sign-up form.");
  firstNameInput.focus();
}

function trySubmitForm(evt) {
  evt.preventDefault();
  let firstNameValid = firstNameInput.checkValidity();
  let lastNameValid = lastNameInput.checkValidity();
  let emailValid = emailInput.checkValidity();
  if (!firstNameValid) {
    alert("Please enter your first name.");
  } else if (!lastNameValid) {
    alert("Please enter your last name.");
  } else if (!emailValid) {
    alert("Please enter your email.");
  } else {
    alert("Form submitted!");
    myForm.submit();
  }
}

function formReset() {firstNameInput.focus();}

function returnToWebsite() {window.location.href='ms_A4_javascript.html';}
