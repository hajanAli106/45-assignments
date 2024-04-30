"use strict";
//Question 33
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let oridinal;
    if (number === 1) {
        oridinal = "st";
    }
    else if (number === 2) {
        oridinal = "nd";
    }
    else if (number === 3) {
        oridinal = "rd";
    }
    else {
        oridinal = "th";
    }
    console.log(`${number}${oridinal}`);
}
