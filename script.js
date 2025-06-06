const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

const nameInput = document.getElementById("nameSurname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError(input, message) {
  input.classList.add("input-error");

  const next = input.nextElementSibling;
  if (!next || !next.classList.contains("error-message")) {
    const error = document.createElement("div");
    error.classList.add("error-message");
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  } else {
    next.textContent = message;
  }
}

function removeError(input) {
  input.classList.remove("input-error");

  const next = input.nextElementSibling;
  if (next && next.classList.contains("error-message")) {
    next.remove();
  }
}

function validateForm() {
  const nameValid = nameInput.value.trim() !== "";
  const emailValue = emailInput.value.trim();
  const emailValid = emailValue !== "" && isValidEmail(emailValue);
  const messageValid = messageInput.value.trim() !== "";

  sendBtn.disabled = !(nameValid && emailValid && messageValid);
}

function checkFieldErrors() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    showError(nameInput, "Polje je obavezno");
  } else {
    removeError(nameInput);
  }

  if (emailValue === "") {
    showError(emailInput, "Polje je obavezno");
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, "Unesite validnu email adresu");
  } else {
    removeError(emailInput);
  }

  if (messageValue === "") {
    showError(messageInput, "Polje je obavezno");
  } else {
    removeError(messageInput);
  }

  validateForm();
}

function sendMail() {
  const params = {
    nameSurname: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  const serviceID = "service_2daf8zx";
  const templateID = "template_bd8xbs7";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      sendBtn.disabled = true;

      Swal.fire({
        icon: 'success',
        title: 'Uspešno poslato!',
        text: 'Vaša poruka je uspešno poslata. Hvala Vam na javljanju!',
        confirmButtonText: 'U redu',
        confirmButtonColor: '#3085d6'
      });
    })
    .catch(err => {
      console.error("Greška pri slanju:", err);
      Swal.fire({
        icon: 'error',
        title: 'Greška',
        text: 'Došlo je do greške pri slanju poruke. Pokušajte ponovo kasnije.',
        confirmButtonText: 'Zatvori',
        confirmButtonColor: '#d33'
      });
    });
}

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  checkFieldErrors();

  const isFormValid =
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    isValidEmail(emailInput.value.trim()) &&
    messageInput.value.trim() !== "";

  if (isFormValid) {
    sendMail();
  }
});

nameInput.addEventListener("input", checkFieldErrors);
emailInput.addEventListener("input", checkFieldErrors);
messageInput.addEventListener("input", checkFieldErrors);

