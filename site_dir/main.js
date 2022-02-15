const form = document.querySelector(".content__form");
const input = form.elements[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  hideError();

  if (input.validity.valueMissing) {
    showError("Oops! Please add your email");
    return;
  }

  if (!input.checkValidity()) {
    showError("Oops! Please check your email");
    return;
  }

  form.submit();
});

function showError(message) {
  const errorElement = document.createElement("p");
  errorElement.classList.add("content__form-error");
  errorElement.innerText = message;
  form.appendChild(errorElement);
}

function hideError() {
  document.querySelectorAll(".content__form-error").forEach((error) => {
    error.remove();
  });
}
