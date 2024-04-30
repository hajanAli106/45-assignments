"use strict";
//Question 39
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) { return `${city}, ${country}`; }
const city1 = city_country("karachi", "pakistan");
const city2 = city_country("london", "united kingdom");
const city3 = city_country("tokyo", "japan");
console.log(city1);
console.log(city2);
console.log(city3);
