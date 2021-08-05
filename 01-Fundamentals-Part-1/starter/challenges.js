/*const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

let johnBMI = massJohn / (heightJohn * heightJohn);
let markBMI = massMark / (heightMark * heightMark);*/
// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI, markBMI, johnBMI);

/*
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}*/

// basic
/*console.log('Round 1');
let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;

if (averageDolphins > averageKoalas) {
    console.log(`Dolphins Wins!`);
} else if (averageKoalas > averageDolphins) {
    console.log('Koalas Wins!');
} else if (averageKoalas === averageDolphins) {
    console.log('Draw!')
} else {
    console.log('No Team Win')
}

console.log('Round 2');
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 123) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Dolphins Wins!`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('Koalas Wins!');
} else if (averageKoalas === averageDolphins) {
    console.log('Draw!')
} else {
    console.log('No Team Win')
}

console.log('Round 3')
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Dolphins Wins! `);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('Koalas Wins!');
} else if (averageKoalas === averageDolphins && averageKoalas >= 100 && averageDolphins >= 100) {
    console.log('Draw!');
} else {
    console.log('No Team Win...');
}*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);