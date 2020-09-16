/*
let johnHeight = 1.61,
    markHeight = 1.67;

let johnMass = 41,
    markMass = 45;

let johnBMI = johnMass / (johnHeight * johnHeight);
let markBMI = markMass / (markHeight * markHeight);

let isJohnHigher = johnBMI > markBMI;

console.log('Is John\'s BMI higher than Mark\'s BMI? ' + isJohnHigher);
*/

let firstName = 'John';
let age = 20;
let job = 'marson';

switch (job) {
  case 'teacher':
    console.log(firstName + ' is a teacher.');
    break;
  case 'driver':
    console.log(firstName + ' is a driver.');
    break;
  case 'dirtman':
  case 'marson':
    console.log(firstName + ' is a dirtman.');
    break;
  default:
    console.log(firstName + ' does sth else.');
}

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

age = 60;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
        break;
}

var drink = age >= 20 ? 'beer' : 'juice';

console.log(firstName + ' is ' + age + ' years old so he drinks ' + drink + '.')
