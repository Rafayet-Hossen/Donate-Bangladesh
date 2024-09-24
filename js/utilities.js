function getFieldValueById(id) {
  const fieldValue = document.getElementById(id).value;
  if (isNaN(fieldValue)) {
    return 0;
  }
  const value = Number(fieldValue);
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
  console.log(balance);
  if (donate < 0) {
    return balance;
  } else if (donate > balance) {
    return balance;
  } else {
    // alert("Amount Donated Successfully");
    showPaymentConfirmationModal();
    return balance - donate;
  }
}

// This will update donation balance

function updatedDonationBalance(currentAmount, donation, balance) {
  if (donation < 0 || donation > balance) {
    return currentAmount;
  }
  return currentAmount + donation;
}

function createTransactionHistory(amount, headline) {
  const transaction = `${amount} Taka is ${headline}`;
  return transaction;
}
