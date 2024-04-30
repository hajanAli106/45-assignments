"use strict";
//Question 24
Object.defineProperty(exports, "__esModule", { value: true });
//test for equaility
const str1 = "HELLO";
const str2 = "world";
console.log(str1 === str2);
console.log(str1 !== str2);
//test using the lower case func:
const word = "HELLLO";
console.log(word.toLowerCase() !== "hello");
console.log(word.toLowerCase() === "hello");
// numerical tests 
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
// and or test
const num3 = 8;
console.log(num1 > num2 && num2 < num3);
console.log(num1 > num2 || num2 < num3);
// test arry or not 
const arry = [1, 2, 3, 4, 5];
console.log(!arry.includes(3));
console.log(arry.includes(6));
