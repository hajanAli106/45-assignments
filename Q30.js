"use strict";
//Question 30
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["admin", "eric", "sara", "john", "aleza"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("hello admin would you like to see a status report");
    }
    else
        console.log(`hello ${username}, thank you for logging in .`);
}
