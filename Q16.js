"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 16 
let guests = ["ronaque", "zeeshan", "musharaf"];
console.log("great news ! I found a bigger table !");
// adding guests
guests.unshift("faraz");
guests.splice(guests.length / 2, 0, "shahjan");
guests.push("shahzain");
guests.forEach(guest => { console.log(`dear ${guest}, would you like to join me for lunch?`); });
