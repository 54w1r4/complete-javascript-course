'use strict';

/*function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}*/

/*
const macau = describeCountry('Macau', 0.07, 'Macau');
const hongKong = describeCountry('Hong Kong', 0.7, 'Hong Kong Island');
const china = describeCountry('China', 13, 'Beijing');
*/

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

let macau = percentageOfWorld1(0.7);
let hongKong = percentageOfWorld1(700);
let china = percentageOfWorld1(1441);

console.log(macau, hongKong, china);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

macau = percentageOfWorld2(0.7);
hongKong = percentageOfWorld2(700);
china = percentageOfWorld2(1441);

console.log(macau, hongKong, china);