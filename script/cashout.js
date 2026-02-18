document.getElementById('cashout-btn').addEventListener('click', () => {
    const cashoutNumber = getValueFromInput('cashout-number');
    const cashoutAmount = getValueFromInput('cashout-amount');
    const cashoutPin = getValueFromInput('cashout-pin');
    // const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = getBalance();
    // const mainBalance = mainBalanceElement.innerText;


    if (cashoutNumber.length !== 11) {
        alert("Invalid Number");
        return;
    }
    if (cashoutPin !== '5479') {
        alert('Invalid Pin')
        return;
    }
    if (Number(cashoutAmount) <= 0 || Number(cashoutAmount) > Number(mainBalance)) {
        alert("Invalid Amount");
        return;
    }

    const newNumber = Number(mainBalance) - Number(cashoutAmount);
    if (newNumber < 0) {
        alert('Invalid Amount');
        return;
    }

    setBalance(newNumber);
    alert("Cashout Successful");


})



// document.getElementById('cashout-btn').addEventListener('click', () => {
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;

//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;

//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const cashoutPin = cashoutPinInput.value;

//     const mainBalanceElement = document.getElementById('main-balance');
//     const mainBalance = mainBalanceElement.innerText;

//     if (cashoutNumber.length !== 11) {
//         alert('Invalid Number')
//         return;
//     }

//     if (cashoutPin !== '5479') {
//         alert('Invalid Pin')
//         return;
//     }

//     const newBalance = Number(mainBalance) - Number(cashoutAmount)

//     if (newBalance < 0) {
//         alert('Invalid Balance');
//         return;
//     }

//     mainBalanceElement.innerText = newBalance;
//     alert("Cashout Successfull")

//     // Clear fields
//     cashoutNumberInput.value = "";
//     cashoutAmountInput.value = "";
//     cashoutPinInput.value = "";
// });