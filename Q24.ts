//Question 24

//test for equaility
const str1: string = "HELLO";
const str2: string = "world";
console.log(str1 === str2);
console.log(str1 !== str2);



//test using the lower case func:

const word : string = "HELLLO";
console.log(word.toLowerCase() !== "hello");
console.log(word.toLowerCase() === "hello");


// numerical tests 

const num1 : number = 10;
const num2 : number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);




// and or test
const num3 : number = 8 
console.log(num1 > num2 && num2 < num3);

console.log(num1 > num2 || num2 < num3);


// test arry or not 

const arry : number[] = [1, 2, 3, 4, 5];
console.log(!arry.includes(3));
console.log(arry.includes(6));