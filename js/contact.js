import { individualProduct } from "./settings/api.js";
import { mobileNav } from "./utils/mobileNav.js";
mobileNav();

function lengthOfInput(input, requierment) {
  if (input.trim().length >= requierment) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

function emailValidation(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const isEmail = regEx.test(email);
  return isEmail;
}

function sendForm() {
  const sucess = document.querySelector(".successMessage");

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subjectError");

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");

  event.preventDefault();

  let validationCounter = 0;
  if (lengthOfInput(name.value.trim(), 1)) {
    nameError.style.display = "none";
    validationCounter += 1;
  } else {
    nameError.style.display = "block";
    validationCounter += -1;
  }

  if (emailValidation(email.value) && lengthOfInput(email.value.trim(), 1)) {
    emailError.style.display = "none";
    validationCounter += 1;
  } else {
    emailError.style.display = "block";
    validationCounter += -1;
  }

  if (lengthOfInput(subject.value.trim(), 1)) {
    subjectError.style.display = "none";
    validationCounter += 1;
  } else {
    subjectError.style.display = "block";
    validationCounter += -1;
  }

  if (lengthOfInput(message.value.trim(), 1)) {
    messageError.style.display = "none";
    validationCounter += 1;
  } else {
    messageError.style.display = "block";
    validationCounter += -1;
  }

  if (validationCounter === 4) {
    sucess.style.display = "flex";
  } else {
    sucess.style.display = "none";
  }
}

function formFunctionality() {
  const form = document.querySelector("form");
  form.addEventListener("submit", sendForm);
}

formFunctionality();
