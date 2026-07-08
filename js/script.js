function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const submit = document.querySelector(".pod__button");
  const emailError = document.querySelector(".email-error");
  const form = document.querySelector(".pod__form");
  let email = null;
  let isValid = null;

  //   submit.disabled = true;

  emailInput.addEventListener("input", (event) => {
    email = emailInput.value;
    isValid = isValidEmail(email);

    emailError.classList.remove("is-visible");
    emailInput.classList.remove("input-error");

    if (isValid) {
      console.log("valide");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    email = emailInput.value;
    isValid = isValidEmail(email);

    if (isValid) {
      emailInput.value = "";
    }

    if (!isValid) {
      emailError.classList.add("is-visible");
      emailInput.classList.add("input-error");
    }
  });

  submit.addEventListener("click", (event) => {
    email = emailInput.value;
    isValid = isValidEmail(email);

    if (!isValid) {
      emailError.classList.add("is-visible");
      emailInput.classList.add("input-error");
    }
  });
});
