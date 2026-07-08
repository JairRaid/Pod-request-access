const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return emailRegex.test(String(email).trim());
}

document.addEventListener("DOMContentLoaded", () => {
  const selectors = {
    emailInput: "#email",
    submitBtn: ".pod__button",
    emailError: ".email-error",
    form: ".pod__form",
  };

  const el = {
    emailInput: document.querySelector(selectors.emailInput),
    submitBtn: document.querySelector(selectors.submitBtn),
    emailError: document.querySelector(selectors.emailError),
    form: document.querySelector(selectors.form),
  };

  if (!el.emailInput || !el.emailError || !el.form) return;

  const state = { email: "", isValid: false };

  function showError() {
    el.emailError.classList.add("is-visible");
    el.emailInput.classList.add("input-error");
    el.emailInput.setAttribute("aria-invalid", "true");
    el.emailError.setAttribute("aria-hidden", "false");
  }

  function clearError() {
    el.emailError.classList.remove("is-visible");
    el.emailInput.classList.remove("input-error");
    el.emailInput.setAttribute("aria-invalid", "false");
    el.emailError.setAttribute("aria-hidden", "true");
  }

  function validateCurrent() {
    state.email = el.emailInput.value;
    state.isValid = isValidEmail(state.email);
    return state.isValid;
  }

  el.emailInput.addEventListener("input", () => {
    validateCurrent();
    if (state.isValid) clearError();
    else {
      // remove visual error while typing but keep aria state neutral
      el.emailError.classList.remove("is-visible");
      el.emailInput.classList.remove("input-error");
    }
  });

  el.form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (validateCurrent()) {
      el.emailInput.value = "";
      clearError();
      // TODO: handle successful submission (e.g. send request)
      return;
    }
    showError();
  });

  if (el.submitBtn) {
    el.submitBtn.addEventListener("click", () => {
      if (!validateCurrent()) showError();
    });
  }
});
