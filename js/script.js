document
  .getElementById("btnDonation1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation1");

    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance1");
    const headline = getInnerTextById("donation-heading-1");
    const date = new Date();

    const updateBalance = updatedBalance(fieldValue, accountBalance);
    const updateDonationBalance = updatedDonationBalance(
      donationBalance,
      fieldValue,
      accountBalance
    );

    const transaction = createTransactionHistory(fieldValue, headline, date);
    console.log(transaction);

    document.getElementById("main-balance").innerText = updateBalance;
    document.getElementById("donationBalance1").innerText =
      updateDonationBalance;
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

    const updateBalance = updatedBalance(fieldValue, accountBalance);
    const updateDonationBalance = updatedDonationBalance(
      donationBalance,
      fieldValue,
      accountBalance
    );

    const transaction = createTransactionHistory(fieldValue, headline, date);
    console.log(transaction);

    document.getElementById("main-balance").innerText = updateBalance;
    document.getElementById("donationBalance2").innerText =
      updateDonationBalance;
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

    const updateBalance = updatedBalance(fieldValue, accountBalance);
    const updateDonationBalance = updatedDonationBalance(
      donationBalance,
      fieldValue,
      accountBalance
    );

    const transaction = createTransactionHistory(fieldValue, headline, date);
    console.log(transaction);

    document.getElementById("main-balance").innerText = updateBalance;
    document.getElementById("donationBalance3").innerText =
      updateDonationBalance;
  });
