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

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const transferMoney = document.getElementById('transfer-money');
    const bonusCoupon = document.getElementById('bonus-coupon');
    const payBill = document.getElementById('pay-bill');
    const transactionHistory = document.getElementById('transaction-history');

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transferMoney.classList.add('hidden');
    bonusCoupon.classList.add('hidden');
    payBill.classList.add('hidden');
    transactionHistory.classList.add('hidden');

    const elementToShow = document.getElementById(id);
    elementToShow.classList.remove('hidden');
}