document
  .getElementById("btnDonation1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation1");
    console.log("first dom value:", fieldValue);
    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance1");
    const headline = getInnerTextById("donation-heading-1");
    const date = new Date();

    if (
      fieldValue != 0 &&
      fieldValue > 0 &&
      accountBalance <= donationBalance
    ) {
      const updateBalance = updatedBalance(fieldValue, accountBalance);
      const updateDonationBalance = updatedDonationBalance(
        donationBalance,
        fieldValue,
        accountBalance
      );

      const transaction = createTransactionHistory(fieldValue, headline, date);
      const p = document.createElement("p");
      p.innerText = transaction;
      document.getElementById("transaction-history").appendChild(p);

      document.getElementById("main-balance").innerText = updateBalance;
      document.getElementById("donationBalance1").innerText =
        updateDonationBalance;
    } else {
      alert("Invalid Amount");
    }
  });

document
  .getElementById("btnDonation2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation2");

    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance2");
    const headline = getInnerTextById("donation-heading-2");
    const date = new Date();

    if (
      fieldValue != 0 &&
      fieldValue > 0 &&
      accountBalance <= donationBalance
    ) {
      const updateBalance = updatedBalance(fieldValue, accountBalance);
      const updateDonationBalance = updatedDonationBalance(
        donationBalance,
        fieldValue,
        accountBalance
      );

      const transaction = createTransactionHistory(fieldValue, headline, date);
      const p = document.createElement("p");
      p.innerText = transaction;
      document.getElementById("transaction-history").appendChild(p);

      document.getElementById("main-balance").innerText = updateBalance;
      document.getElementById("donationBalance2").innerText =
        updateDonationBalance;
    } else {
      alert("Invalid Amount");
    }
  });

document
  .getElementById("btnDonation3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation3");

    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance3");
    const headline = getInnerTextById("donation-heading-3");
    const date = new Date();

    if (
      fieldValue != 0 &&
      fieldValue > 0 &&
      accountBalance <= donationBalance
    ) {
      const updateBalance = updatedBalance(fieldValue, accountBalance);
      const updateDonationBalance = updatedDonationBalance(
        donationBalance,
        fieldValue,
        accountBalance
      );

      const transaction = createTransactionHistory(fieldValue, headline, date);
      const p = document.createElement("p");
      p.innerText = transaction;
      document.getElementById("transaction-history").appendChild(p);

      document.getElementById("main-balance").innerText = updateBalance;
      document.getElementById("donationBalance3").innerText =
        updateDonationBalance;
    } else {
      alert("Invalid Amount");
    }
  });
