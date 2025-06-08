function calculateBodaFare() {
    
    const BASE_FARE = 50; // KES 50 
    const CHARGE_PER_KM = 15; // KES 15 for every kilometer traveled 

    // 1. Prompts the user to enter the distance of their trip in kilometers. 
    let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"); //

    
    let distanceInKm = parseFloat(distanceInput); //

    
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Invalid input. Please enter a valid non-negative number for the distance.");
        return; 
    }

    // 3. Calculates the total estimated fare using the formula: 
    
    const totalFare = BASE_FARE + (distanceInKm * CHARGE_PER_KM);

    // 4. Prints the result to the console in a user-friendly format. 
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`); //
    console.log(`Ukikalia Pikipiki: KES ${BASE_FARE}`); //
    console.log(`Mpaka Uko: KES ${distanceInKm * CHARGE_PER_KM}`); // This shows the distance-based charge
    console.log(`Total: KES ${totalFare}`); //
    console.log("Panda Pikipiki!"); //
}


calculateBodaFare();