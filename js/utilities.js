function getFieldValueById(id) {
  const fieldValue = document.getElementById(id).value;
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
  if (donate < 0) {
    alert("Invalid Amount");
    return balance;
  } else if (donate > balance) {
    alert("Insufficient Balance");
    return balance;
  } else {
    // alert("Amount Donated Successfully");
    showPaymentConfirmationModal();
    //add transaction history
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

function createTransactionHistory(amount, headline, date) {
  const transaction = `${amount} Taka is ${headline} Date: ${date}`;
  return transaction;
}
