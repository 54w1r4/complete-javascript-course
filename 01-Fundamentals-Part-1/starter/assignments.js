const country = 'China';
const continent = 'Asia';
let population = 14;

/*
console.log(country);
console.log(continent);
console.log(population);
*/

const isIsland = false;
let language;

/*console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);*/

language = 'mandarin';
// isIsland = false;

/*console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(averagePopulation < population);

population--;*/
// let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.';
/*let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);*/

// population = 130;

/*
if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average.`);
}*/

/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`)
}*/

/*
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria...`);
}*/

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`)