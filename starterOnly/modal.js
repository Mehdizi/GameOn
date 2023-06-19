function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// regex for valid input

const regex_email = /@/;
const regex_birthdate =
  /^(19[0-9][0-9]|20[0-9][0-9])(-)(0[1-9]|1[0-2])(-)(0[1-9]|[1-2][0-9]|3[0-1])$/;
// const regex_name = /[A-Za-zîï]/

// champ validation pour submit
let firstName_validation = false;
let lastName_validation = false;
let email_validation = false;
let birthdate_validation = false;
let quantity_validation = false;
let tournamentLocation_validation = false;
let user_condition_validation = false;

// DOM Elements
// const succes = document.querySelector(".modal-body");
const tournamentLocation = document.querySelectorAll("input[type=radio]");
const tournamentLocation_error = document.querySelector(".locationData_error");
const quantity = document.querySelector("#quantity");
const birthdate = document.querySelector("#birthdate");
const email = document.querySelector("#email");
const lastName = document.querySelector("#last");
const firstName = document.querySelector("#first");
const information = document.querySelector(".information");
const firstName_error = document.querySelector(".firstName_error");
const lastName_error = document.querySelector(".lastName_error");
const email_error = document.querySelector(".email_error");
const birthdate_error = document.querySelector(".birthdate_error");
const quantity_error = document.querySelector(".quantity_error");
const validation = document.getElementById("validation_form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// Vérification que le submit est correct
// validation.addEventListener("click", valid_submit);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// bouton pour fermer le modal
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close the modal with the close cross
function closeModal() {
  modalbg.style.display = "none";
}
// close the modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalbg.style.display = "none";
  }
});

document.querySelector("#first").addEventListener("input", firstName_validator);
document.querySelector("#last").addEventListener("input", lastName_validator);

function firstName_validator(e) {
  if (e.currentTarget.value.length >= 2 && e.currentTarget.value.length < 25) {
    firstName.classList.add("valid");
    firstName_error.textContent = "";
    firstName_validation = true;
  } else {
    firstName_error.textContent =
      "Veuillez saisir un prénom entre 2 et 25 lettres";
    firstName_error.style.color = "orange";
    firstName.classList.remove("valid");
    firstName_validation = false;
  }
  // console.log(firstName_validation);
}

function lastName_validator(e) {
  if (e.currentTarget.value.length >= 2 && e.currentTarget.value.length < 25) {
    lastName.classList.add("valid");
    lastName_error.textContent = "";
    lastName_validation = true;
  } else {
    lastName_error.textContent = "Veuillez saisir un nom entre 2 et 25 lettres";
    lastName_error.style.color = "orange";
    lastName.classList.remove("valid");
    lastName_validation = false;
  }
  // console.log(lastName_validation);
}

email.addEventListener("input", (e) => {
  if (
    e.currentTarget.value.match(regex_email) &&
    e.currentTarget.value.length > 2
  ) {
    email_error.textContent = "";
    email_validation = true;
    email.classList.add("valid");
  } else {
    email_error.textContent = "Veuillez entrer une adresse mail valide";
    email_error.style.color = "orange";
    email_validation = false;
    email.classList.remove("valid");
  }
  // console.log(email_validation);
});

birthdate.addEventListener("change", (e) => {
  if (e.currentTarget.value.match(regex_birthdate)) {
    birthdate.classList.add("valid");
    birthdate_error.textContent = "";
    birthdate_validation = true;
  } else {
    birthdate.classList.remove("valid");
    birthdate_error.textContent =
      "Veuillez entrer une date de naissance valide";
    birthdate_error.style.color = "orange";
    birthdate_validation = false;
  }
  // console.log("change", e.currentTarget.value, birthdate_validation);
});

quantity.addEventListener("input", (e) => {
  if (e.currentTarget.value >= 0 && e.currentTarget.value < 99) {
    quantity_error.textContent = "";
    quantity_validation = true;
    quantity.classList.add("valid");
  } else {
    quantity_validation = false;
    quantity.classList.remove("valid");
    quantity_error.textContent = "veuillez sélectionner un nombre en 0 et 99";
    quantity_error.style.color = "orange";
  }
  // console.log(quantity_validation);
});

tournamentLocation.forEach(function (location) {
  location.addEventListener("change", (e) => {
    // console.log(e.currentTarget.value, e.currentTarget.checked);
    if (e.currentTarget.checked === true) {
      tournamentLocation_validation = true;
      tournamentLocation_error.textContent = "";
    } else {
      tournamentLocation_validation = false;
    }
  });
});

// Validation of user-condition selection
document.querySelector("#checkbox1").addEventListener("change", (e) => {
  user_condition_validation = e.currentTarget.checked;
  // console.log(e.currentTarget.checked);
  // console.log(user_condition_validation);
});

document.querySelector(".btn-submit").addEventListener("click", (e) => {
  console.log("submit");
  console.log(firstName_validation);
  console.log(lastName_validation);
  console.log(email_validation);
  console.log(birthdate_validation);
  console.log(quantity_validation);
  console.log(tournamentLocation_validation);
  console.log(user_condition_validation);
  if (
    firstName_validation &&
    lastName_validation &&
    email_validation &&
    user_condition_validation &&
    quantity_validation &&
    birthdate_validation &&
    tournamentLocation_validation
  ) {
    // Ici il faut afficher la page de succes d'inscription
    e.preventDefault();
    // succes.innerHTML = "Merci pour votre inscription";
  }
  if (tournamentLocation_validation === false) {
    e.preventDefault();
    tournamentLocation_error.textContent =
      "veuillez sélectionner un tournois auquel vous voulez participer";
    tournamentLocation_error.style.color = "orange";
  } else {
    e.preventDefault();
  }
});
