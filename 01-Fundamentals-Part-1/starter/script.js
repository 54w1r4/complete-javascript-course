/*

let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Edward");
console.log(17)

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variables name conventions
let edward_swalker = "Edward Swalker";
let $function = 27;

let person = 'edward';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Edward');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
// console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 39;

const birthYear = 2004;
// birthYear = 2019;
// const job;

var job = 'accountant';
job = 'teacher';

firstName = 'Edward';
console.log(firstName);

// Math Operators
const now = 2077;
const ageEdward = now - 2004;
const ageJacky = now - 2037;
console.log(ageEdward, ageJacky);

console.log(ageEdward * 2, ageEdward / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which is 8

const firstName = 'Chin Wai';
const lastName = 'Ke';
console.log(lastName + ' ' + firstName + ' ' + 'Thief');

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageEdward > ageJacky); // >, <, >=, <=
console.log(ageJacky >= 18);

const isFullAge = ageJacky >= 18;

console.log(now - 2004 > now - 2037);

const now = 2077;
const ageEdward = now - 2004;
const ageKevin = now - 2037;

console.log(now - 2004 > now - 2037);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageEdward + ageKevin) / 2;
console.log(ageEdward, ageKevin, averageAge);

const firstName = 'Rain';
const job = 'Developer';
const birthYear = 2004;
const currentYear = 2037;

const rain = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(rain);

const rainNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`
console.log(rainNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('ToyBin can start driving license! 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`ToyBin is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2004;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);*/

// type conversion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('NaN'));
console.log(typeof NaN);

console.log(String(23), 23);*/

// type coercion
/*
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Sponge'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100

if (money) {
    console.log(`Don't spend it all!`)
} else {
    console.log(`You should get a job!`)
}

let height;

if (height) {
    console.log(`YAY! Height is defined!`)
} else {
    console.log(`Height is UNDEFINED :(`)
}*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult. (strict)');
if (age == 18) console.log('You just became an adult. (loose)');

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 108) { // 108 === 108
    console.log(`Cool! 108 is an amazing number!`);
} else if (favourite === 504) {
    console.log(`504 is also a cool number!`);
} else if (favourite === 611) {
    console.log(`611 is also a cool number!`);
} else {
    console.log(`Number is not 108 or 504 or 611.`);
}

if (favourite !== 108) console.log(`Why not 108?`);*/

/*const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);*/

/*if (hasDriversLicense && hasGoodVision) {
    console.log(`YoKan is able to drive.`);
} else {
    console.log(`Someone else should drive...`);
}*/

/*
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`YoKan is able to drive.`);
} else {
    console.log(`Someone else should drive...`);
}*/

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to Coding Meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid weekday...');
}

// if style

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to Coding Meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Not a valid weekday...');
}