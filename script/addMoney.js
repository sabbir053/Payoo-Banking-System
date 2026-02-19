document.getElementById('add-money-btn').addEventListener('click', () => {
    const addMoneyBank = getValueFromInput("add-money-bank");
    const addMoneyNumber = getValueFromInput("add-acc-number");
    const addMoneyAmount = getValueFromInput("add-money-amount");
    const cashOutPin = getValueFromInput("add-money-pin");

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

    // transaction History
    let currentTime = new Date().toLocaleTimeString();
    const transactionHistory = document.getElementById('transaction-history');
    const addHistory = document.createElement('div');
    addHistory.innerHTML = `
    <div class="card bg-base-100 rounded-2xl shadow p-4">
        <div class="flex items-center">
            <div class="flex items-center gap-4">
                <div class="p-2 rounded-full bg-gray-200/50">
                    <img src="./assets/opt-1.png" class="w-8" alt="">
                </div>
                <div>
                    <h2 class="font-bold">Add Money</h2> From: <span class="text-primary font-bold">${addMoneyBank}</span> Account: <span class="text-primary font-bold">${addMoneyNumber}</span> Amount <span class="text-primary font-bold">₱${addMoneyAmount}</span>
                    <p class="text-neutral/50 text-sm">Today: ${currentTime}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical ml-auto cursor-pointer"></i>
        </div>
    </div>
    `

    transactionHistory.append(addHistory);
    alert("Add Money Successful");
})