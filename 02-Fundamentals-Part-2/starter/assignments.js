'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const macau = describeCountry('Macau', 0.07, 'Macau');
const hongKong = describeCountry('Hong Kong', 0.7, 'Hong Kong Island');
const china = describeCountry('China', 13, 'Beijing');

console.log(macau, hongKong, china);