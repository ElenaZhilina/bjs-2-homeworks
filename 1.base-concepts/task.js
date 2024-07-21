
//Task 1
"use strict";
function solveEquation(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return []; 
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return [root]; 
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2]; 
    }
}

//Task 2
"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = +(percent);
    contribution = +(contribution);
    amount = +(amount);
    countMonths = +(countMonths);

    let monthlyRate = percent / 100 / 12;

    let principal = amount - contribution;

    if (principal <= 0) {
        return 0;
    }

    let monthlyPayment = principal * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));

    let totalPayment = (monthlyPayment * countMonths);

    totalPayment += contribution;

    totalPayment = +(totalPayment.toFixed(2));

    return totalPayment;
}
