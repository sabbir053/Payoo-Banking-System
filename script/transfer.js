document.getElementById('transfer-btn').addEventListener('click', () => {
    const userAccountNumber = getValueFromInput("user-account-number");
    const transferAmount = getValueFromInput("transfer-amount");
    const transferPin = getValueFromInput("transfer-pin");
    const mainBalance = getBalance();

    if (userAccountNumber.length !== 11) {
        alert("Invalid Number");
        return;
    }
    if (transferPin !== '5479') {
        alert('Invalid Pin')
        return;
    }

    if (Number(transferAmount) <= 0 || Number(transferAmount) > Number(mainBalance)) {
        alert("Invalid Amount");
        return;
    }

    const newNumber = Number(mainBalance) - Number(transferAmount);
    if (newNumber < 0) {
        alert('Invalid Amount');
        return;
    }

    setBalance(newNumber);
    alert("Money Transfer Successful");
})