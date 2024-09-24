function getFieldValueById(id) {
  const fieldValue = document.getElementById(id).value;
  const value = Number(fieldValue);
  if (isNaN(value)) {
    return "NULL";
  }
  return value;
}

function getTextValue(id) {
  const textValue = document.getElementById(id).innerText;
  const value = Number(textValue);
  return value;
}

function getInnerTextById(id) {
  const heading = document.getElementById(id).innerText;
  return heading;
}

// This function will calculate the value and return update value

function updatedBalance(donate, balance) {
  showPaymentConfirmationModal();
  return balance - donate;
}

// This will update donation balance

function updatedDonationBalance(currentAmount, donation) {
  return currentAmount + donation;
}

function createTransactionHistory(amount, headline) {
  const transaction = `${amount} Taka is ${headline}`;
  return transaction;
}

function clearInputField(id) {
  document.getElementById(id).value = "";
}
