// const contactContainer = document.querySelector("contact-container")
const contactForm = document.querySelector("#contact-form");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name-error");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

function formValidation(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 2)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if((checkLength(firstName.value, 0)), (checkLength(lastName.value, 3)), (validateEmail(email.value)) ){
        contactForm.innerHTML = `<p class="thanks-message">Thank you for your message!</p>`
    }

}

contactForm.addEventListener("submit", formValidation);

function checkLength(value, inputLength) {
    if (value.trim().length > inputLength) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailValid = regEx.test(email);
    return emailValid;
}
