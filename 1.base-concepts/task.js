
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

//function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
//}