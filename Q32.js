"use strict";
//Question 32
Object.defineProperty(exports, "__esModule", { value: true });
let currusers = ["eric", "emma", "john", "mike", "aleza"];
let newusers = ["eric", "emma", "aleza", "sara", "chris"];
let currusersLower = currusers.map(user => user.toLowerCase());
for (let user of newusers) {
    let isTaken = currusersLower.includes(user.toLowerCase());
    if (isTaken) {
        console.log(`the username '${user}' is not availble. please enter a new username.`);
    }
    else {
        console.log(`the username '${user}' is available`);
    }
}
