function calculateChaiIngredients() {
    const WATER_PER_CUP = 200; // ml 
    const MILK_PER_CUP = 50;   // ml 
    const TEA_LEAVES_PER_CUP = 1; // tablespoon 
    const SUGAR_PER_CUP = 2;    // teaspoons 

    // 1. Prompt the user to enter the number of chai cups they want to make 
    let numberOfCupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?"); // 

    // 2. Convert the input to a number 
    let numberOfCups = parseFloat(numberOfCupsInput);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Invalid input. Please enter a valid positive number for the number of chai cups.");
        return; 
    }

    // 3. Calculate the required amount for each ingredient 
    const waterNeeded = numberOfCups * WATER_PER_CUP;
    const milkNeeded = numberOfCups * MILK_PER_CUP;
    const teaLeavesNeeded = numberOfCups * TEA_LEAVES_PER_CUP;
    const sugarNeeded = numberOfCups * SUGAR_PER_CUP;

    // 4. Print the results to the console in a clear, readable format 
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`); // 
    console.log(`Water: ${waterNeeded} ml`); // 
    console.log(`Milk: ${milkNeeded} ml`); // 
    console.log(`Tea Leaves (Majani): ${teaLeavesNeeded} tablespoons`); // 
    console.log(`Sugar (Sukari): ${sugarNeeded} teaspoons`); // 
    console.log("Enjoy your Chai Bora!"); // 
}


calculateChaiIngredients();