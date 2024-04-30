"use strict";
//Question 15 
Object.defineProperty(exports, "__esModule", { value: true });
let logs = ["zeeshan", "ronaque", "shahzain", "musharaf"];
let unableToattend = "zeeshan";
console.log(`${unableToattend} can't make it to lunch .`);
//replace the guest
let newguest = "faraz";
logs[logs.indexOf(unableToattend)] = newguest;
//new invitations 
logs.forEach(guest => { console.log(` dear ${guest},would you like to join me for lunch?`); });
