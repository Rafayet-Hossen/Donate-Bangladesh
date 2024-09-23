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
document.getElementById("btnDonation").addEventListener("click", function () {
  document.getElementById("btnDonation").classList.add("btn-success");
  document.getElementById("btnHistory").classList.remove("btn-success");
  showSectionById("main-donation-section");
});

document.getElementById("btnHistory").addEventListener("click", function () {
  document.getElementById("btnDonation").classList.remove("btn-success");
  document.getElementById("btnHistory").classList.add("btn-success");
  showSectionById('history-section');
});
