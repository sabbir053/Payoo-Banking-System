document.getElementById('cashout-btn').addEventListener('click', () => {
    const addMoneyBank = getValueFromInput("add-money-bank");
    const addMoneyNumber = getValueFromInput("add-acc-number");
    const addMoneyAmount = getValueFromInput("add-money-amount");
    const cashOutPin = getValueFromInput("cashout-pin");

    const mainBalance = getBalance();

    if (addMoneyNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }
    if (cashOutPin !== '5479') {
        alert('Invalid Pin')
        return;
    }

    const newNumber = Number(mainBalance) + Number(addMoneyAmount);

    if (addMoneyAmount < 0) {
        alert("Invalid amount");
        return;
    }

    setBalance(newNumber);
    alert("Add Money Successful");
})