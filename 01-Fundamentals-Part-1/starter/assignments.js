const country = 'China';
const continent = 'Asia';
let population = 14;

/*
console.log(country);
console.log(continent);
console.log(population);
*/

const isIsland = true;
let language;

/*console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);*/

language = 'Cantonese';
// isIsland = false;

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(averagePopulation < population);

population--;
let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.';
console.log(description)