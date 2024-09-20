const addMoney = document.getElementById("add-money");
const withdrawMoney = document.getElementById("cash-out");

document.getElementById("addMoney").addEventListener("click", function () {
  addMoney.classList.remove("hidden");
  withdrawMoney.classList.add("hidden");
});

document.getElementById("withdrawMoney").addEventListener("click", function () {
  withdrawMoney.classList.remove("hidden");
  addMoney.classList.add("hidden");
});

document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "index.html";
});
