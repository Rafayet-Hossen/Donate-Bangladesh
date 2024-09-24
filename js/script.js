document
  .getElementById("btnDonation1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation1");
    clearInputField("donation1");
    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance1");
    const headline = getInnerTextById("donation-heading-1");
    const date = new Date();

    if (fieldValue === "NULL" || fieldValue < 0) {
      alert("Invalid input");
    } else if (accountBalance < fieldValue) {
      alert("Insufficient Balance");
    } else {
      const updateBalance = updatedBalance(fieldValue, accountBalance);
      const updateDonationBalance = updatedDonationBalance(
        donationBalance,
        fieldValue
      );
      console.log(updateBalance, updateDonationBalance);
      const transaction = createTransactionHistory(fieldValue, headline);
      const p = document.createElement("div");
      p.innerHTML = `<div class="bg-white h-28 w-28">
      <p class="font-bold text-xl">${transaction}</p>
      <p class="text-gray-500">${date}</p>
      </div>`;
      document.getElementById("transaction-history").appendChild(p);

      document.getElementById("main-balance").innerText = updateBalance;
      document.getElementById("donationBalance1").innerText =
        updateDonationBalance;
    }
  });

document
  .getElementById("btnDonation2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation2");
    clearInputField("donation2");
    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance2");
    const headline = getInnerTextById("donation-heading-2");
    const date = new Date();

    if (fieldValue === "NULL" || fieldValue < 0) {
      alert("Invalid input");
    } else if (accountBalance < fieldValue) {
      alert("Insufficient Balance");
    } else {
      const updateBalance = updatedBalance(fieldValue, accountBalance);
      const updateDonationBalance = updatedDonationBalance(
        donationBalance,
        fieldValue,
        accountBalance
      );

      const transaction = createTransactionHistory(fieldValue, headline);
      const p = document.createElement("div");
      p.innerHTML = `<div class="bg-white h-28 w-28">
      <p class="font-bold text-xl">${transaction}</p>
      <p class="text-gray-500">${date}</p>
      </div>`;
      document.getElementById("transaction-history").appendChild(p);

      document.getElementById("main-balance").innerText = updateBalance;
      document.getElementById("donationBalance2").innerText =
        updateDonationBalance;
    }
  });

document
  .getElementById("btnDonation3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation3");
    clearInputField("donation3");
    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance3");
    const headline = getInnerTextById("donation-heading-3");
    const date = new Date();

    if (fieldValue === "NULL" || fieldValue < 0) {
      alert("Invalid input");
    } else if (accountBalance < fieldValue) {
      alert("Insufficient Balance");
    } else {
      const updateBalance = updatedBalance(fieldValue, accountBalance);
      const updateDonationBalance = updatedDonationBalance(
        donationBalance,
        fieldValue,
        accountBalance
      );

      const transaction = createTransactionHistory(fieldValue, headline);
      const p = document.createElement("div");
      p.innerHTML = `<div class="bg-white h-28 w-28">
      <p class="font-bold text-xl">${transaction}</p>
      <p class="text-gray-500">${date}</p>
      </div>`;
      document.getElementById("transaction-history").appendChild(p);

      document.getElementById("main-balance").innerText = updateBalance;
      document.getElementById("donationBalance3").innerText =
        updateDonationBalance;
    }
  });
