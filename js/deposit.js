// Step 01: Add Event Listener In Deposit Button
document.getElementById('btn-deposit').addEventListener('click', function(){

// Step 02: Get The Deposit Amount From The Input Field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

// Step 02 Extra: Convert String To Number By ParseFloat

    const newDepositAmount = parseFloat(newDepositAmountString);

// Step 03: Get The Current Deposit Total

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step 04: Addition
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

// Step 05: Get Total Balance Update Amount

const balanceTotalElement = document.getElementById('total-balance');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// Step 06: Calculate Current Total Balance

const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;

// Step 06: Clear The Deposit Field
    depositField.value = '';
})