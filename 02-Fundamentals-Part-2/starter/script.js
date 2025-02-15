'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');*/

// const interface = 'audio';
// const private = 23;

/*function logger() {
    console.log('My name is Elly');
}*/

//calling / running / invoking function
/*logger();
logger();
logger();*/

/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);*/

// function declaration
/*
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(2004);
*/

// function expression
/*
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(2003);

console.log(age1, age2);*/

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement1 = birthYear => 65 - (2037 - birthYear);

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will retire in ${retirement} years.`;
}

console.log(yearsUntilRetirement1(1991));
console.log(yearsUntilRetirement2(2004, 'Jacky'));