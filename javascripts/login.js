// LOGIN DETAILS
const number = "01711222333";
const pin = "123";

// lOGIN OPERATION
const loginNumber = document.getElementById("input-number");
const loginPin = document.getElementById("input-pin");
const errorMsg = document.getElementById("error-msg");
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (loginNumber.value === number && loginPin.value === pin) {
      window.location.href = "home.html";
      errorMsg.classList.add("invisible");
    } else {
      errorMsg.classList.remove("invisible");
    }
  });
