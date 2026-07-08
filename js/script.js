function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const submit = document.querySelector(".pod__button");
  const emailError = document.querySelector(".email-error");
  let email = null;
  let isValid = null;

  //   submit.disabled = true;

  emailInput.addEventListener("input", (event) => {
    email = emailInput.value;
    isValid = isValidEmail(email);

    console.log(email);

    emailError.classList.remove("is-visible");
    emailInput.classList.remove("input-error");

    if (isValid) {
      console.log("valide");
    }
  });

  submit.addEventListener("click", (event) => {
    email = emailInput.value;
    isValid = isValidEmail(email);

    if (isValid) return;

    if (!isValid) {
      emailError.classList.add("is-visible");
      emailInput.classList.add("input-error");
    }
  });
});
