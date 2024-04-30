"use strict";
//question 18
Object.defineProperty(exports, "__esModule", { value: true });
let locationns = ["maldives", "burj khalifa", "taj mahal", "badshahi masjid"];
console.log(locationns);
locationns.sort();
console.log(locationns);
locationns.sort((a, b) => b.localeCompare(a));
console.log(locationns);
