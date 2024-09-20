const agentNumber = document.getElementById("input-agent-number");
const addCashoutAmount = document.getElementById("input-withdraw-amount");
const pinNum = document.getElementById("input-pin-number");
const balance = document.getElementById("balance");
const pin = "123";

document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const currentBalance = parseFloat(balance.innerText);
    const amount = parseFloat(addCashoutAmount.value);

    if (agentNumber.value.length !== 11) {
      document.getElementById("error-msg-agent").classList.remove("hidden");
    } else {
      document.getElementById("error-msg-agent").classList.add("hidden");
    }

    if (!addCashoutAmount.value > 0) {
      document
        .getElementById("error-msg-cashout-amount")
        .classList.remove("hidden");
    } else {
      document
        .getElementById("error-msg-cashout-amount")
        .classList.add("hidden");
    }

    if (pinNum.value !== pin) {
      document
        .getElementById("error-msg-pin-number")
        .classList.remove("hidden");
    } else {
      document.getElementById("error-msg-pin-number").classList.add("hidden");
    }

    if (currentBalance >= amount) {
      if (
        agentNumber.value.length === 11 &&
        amount > 0 &&
        pinNum.value === pin
      ) {
        const newBalance = currentBalance - amount;
        balance.innerText = newBalance;
        console.log(object);
      }
    }
  });
