document
  .getElementById("btnDonation1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const fieldValue = getFieldValueById("donation1");

    const accountBalance = getTextValue("main-balance");
    const donationBalance = getTextValue("donationBalance1");

    const updateBalance = updatedBalance(fieldValue, accountBalance);
    const updateDonationBalance = updatedDonationBalance(
      donationBalance,
      fieldValue,
      accountBalance
    );

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

    const updateBalance = updatedBalance(fieldValue, accountBalance);
    const updateDonationBalance = updatedDonationBalance(
      donationBalance,
      fieldValue,
      accountBalance
    );

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

    const updateBalance = updatedBalance(fieldValue, accountBalance);
    const updateDonationBalance = updatedDonationBalance(
      donationBalance,
      fieldValue,
      accountBalance
    );

    document.getElementById("main-balance").innerText = updateBalance;
    document.getElementById("donationBalance3").innerText =
      updateDonationBalance;
  });

document
  .getElementById("btnCloseConfirmation")
  .addEventListener("click", function () {
    hidePaymentConfirmationModal();
  });

// btn active status toggle
document.getElementById('btnDonation').addEventListener('click',function(){
  document.getElementById('btnDonation').classList.add('btn-success');
  document.getElementById('btnHistory').classList.remove('btn-success');
})

document.getElementById("btnHistory").addEventListener("click", function () {
  document.getElementById("btnDonation").classList.remove("btn-success");
  document.getElementById("btnHistory").classList.add("btn-success");
});