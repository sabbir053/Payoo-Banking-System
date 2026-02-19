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
                    <h2 class="font-bold">Money Transfer</h2> Account Number: <span class="text-primary font-bold">${userAccountNumber}</span> Amount: <span class="text-primary font-bold">₱${transferAmount}</span>
                    <p class="text-neutral/50 text-sm">Today: ${currentTime}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical ml-auto cursor-pointer"></i>
        </div>
    </div>
    `

    transactionHistory.append(addHistory);


    alert("Money Transfer Successful");
})