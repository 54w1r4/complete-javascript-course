let johnHeight = 1.61,
    markHeight = 1.67;

let johnMass = 41,
    markMass = 45;

let johnBMI = johnMass / (johnHeight * johnHeight);
let markBMI = markMass / (markHeight * markHeight);

let isJohnHigher = johnBMI > markBMI;

console.log('Is John\'s BMI higher than Mark\'s BMI? ' + isJohnHigher);