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
// This function will calculate the value and return update value

function updatedBalance(donate,balance) {
    if(donate < 0) {
        alert('Invalid Amount');
        return balance;
    }
    else if(donate > balance) {
        alert('Insufficient Balance');
        return balance;
    }
    else {
        return balance - donate;
    }

}

// This will update donation balance

function updatedDonationBalance(currentAmount,donation,balance) {
    if(donation < 0 || donation > balance) {
        return currentAmount;
    }
    return currentAmount + donation;
}