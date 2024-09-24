//Payment Confirmation Modal
function showPaymentConfirmationModal() {
  const modal = document.getElementById("paymentConfirmationModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}
// Close Confirmation Modal
document
  .getElementById("btnCloseConfirmation")
  .addEventListener("click", function () {
    hidePaymentConfirmationModal();
  });

//Hide Payment Confirmation Modal

function hidePaymentConfirmationModal() {
  const modal = document.getElementById("paymentConfirmationModal");
  modal.classList.add("hidden");
}

// btn active status toggle

const donationSection = document.getElementById("main-donation-section");
const transactionSection = document.getElementById("transaction-section");

const btnDonation = document.getElementById("btnDonation");
const btnHistory = document.getElementById("btnHistory");

btnDonation.addEventListener("click", function () {
  donationSection.classList.remove("hidden");

  transactionSection.classList.add("hidden");

  btnDonation.classList.add("btn-success");

  btnHistory.classList.remove("btn-success");
});

btnHistory.addEventListener("click", function () {
  transactionSection.classList.remove("hidden");

  donationSection.classList.add("hidden");

  btnHistory.classList.add("btn-success");

  btnDonation.classList.remove("btn-success");
});
