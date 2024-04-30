"use strict";
//Question 41
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
//Array of magician names
const magicianNames = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
//Call the function to show magician names
showMagicians(magicianNames);
