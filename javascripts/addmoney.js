const accountNumber = document.getElementById("input-account-number");
const addMoneyAmount = document.getElementById("input-add-amount");
const pinNumber = document.getElementById("input-pin");
const balance = document.getElementById("balance");
const pin = "123";

document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("addMoney").removeAttribute("src");
  const currentBalance = parseFloat(balance.innerText);
  const amount = parseFloat(addMoneyAmount.value);

  if (accountNumber.value.length !== 11) {
    document.getElementById("error-msg-bank").classList.remove("hidden");
  } else {
    document.getElementById("error-msg-bank").classList.add("hidden");
  }

  if (!addMoneyAmount.value > 0) {
    document.getElementById("error-msg-amount").classList.remove("hidden");
  } else {
    document.getElementById("error-msg-amount").classList.add("hidden");
  }

  if (pinNumber.value !== pin) {
    document.getElementById("error-msg-pin").classList.remove("hidden");
  } else {
    document.getElementById("error-msg-pin").classList.add("hidden");
  }

  if (
    accountNumber.value.length === 11 &&
    amount > 0 &&
    pinNumber.value === pin
  ) {
    const newBalance = currentBalance + amount;
    balance.innerText = newBalance;
  }
});
