function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(value);
    return value;
}

// get main balance
function getBalance() {
    const currentBalance = document.getElementById('main-balance');
    const balance = currentBalance.innerText;
    return Number(balance);
}

// set New Balance 
function setBalance(value) {
    const balanceElement = document.getElementById('main-balance');
    balanceElement.innerText = value;
}