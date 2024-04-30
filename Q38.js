"use strict";
//Question 38
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("paris", "france");
