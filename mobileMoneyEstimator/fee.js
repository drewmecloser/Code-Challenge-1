function estimateTransactionFee() {
   
    const BASIC_FEE_PERCENTAGE = 0.015; // 1.5% 
    const MINIMUM_FEE = 10; // KES 10 
    const MAXIMUM_FEE = 70; // KES 70 

    // 1. Prompt the user to enter the amount of money they wish to send.
    let amountInput = prompt("Unatuma Ngapi? (KES):"); // 

    // 2. Convert this input to a number.
    let amountToSend = parseFloat(amountInput); // 

    
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Invalid input. Please enter a valid positive amount to send.");
        return; 
    }

    // 3. Calculates the transaction fee based on the 1.5% rule,
    // ensuring it adheres to the minimum and maximum fee limits. 
    let calculatedFee = amountToSend * BASIC_FEE_PERCENTAGE;

    let transactionFee;
    if (calculatedFee < MINIMUM_FEE) { // If 1.5% of the amount is less than KES 10, the fee charged is KES 10. 
        transactionFee = MINIMUM_FEE;
    } else if (calculatedFee > MAXIMUM_FEE) { // If 1.5% of the amount is more than KES 70, the fee charged is KES 70. 
        transactionFee = MAXIMUM_FEE;
    } else {
        transactionFee = calculatedFee;
    }



    // 4. Calculates the total amount that will be debited (amount to send + transaction fee). 
    const totalDebitedAmount = amountToSend + transactionFee;

    // 5. Prints the results to the console. 
    console.log(`Sending KES ${amountToSend}:`); //
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`); //
    console.log(`Total amount to be debited: KES ${totalDebitedAmount}`); //
    console.log("Send Money Securely!"); //
}


estimateTransactionFee();