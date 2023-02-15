// Step 01: Add Event Listener In Deposit Button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Step 02: Get The Deposit Amount From The Input Field
    
        const withdrawField = document.getElementById('withdraw-field');
        const newWithdrawAmountString = withdrawField.value;
    
    // Step 02 Extra: Convert String To Number By ParseFloat
    
        const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // Step 03: Get The Current Deposit Total
    
        const withdrawTotalElement = document.getElementById('total-withdraw');
        const previousWithdrawTotalString = withdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
        // Step 04: Addition
        const currentWithdrawTotal = previousWithdrawTotal - newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // Step 05: Get Total Balance Update Amount
    
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // Step 06: Calculate Current Total Balance
    
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // Step 06: Clear The Deposit Field
        depositField.value = '';
        withdrawField.value = '';
    })