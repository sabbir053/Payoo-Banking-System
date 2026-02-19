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
                    <h2 class="font-bold">Cash Out</h2> Account Number: <span class="text-primary font-bold">${cashoutNumber}</span> Amount: <span class="text-primary font-bold">₱${cashoutAmount}</span>
                    <p class="text-neutral/50 text-sm">Today: ${currentTime}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical ml-auto cursor-pointer"></i>
        </div>
    </div>
    `

    transactionHistory.append(addHistory);



    alert("Cashout Successful");


})