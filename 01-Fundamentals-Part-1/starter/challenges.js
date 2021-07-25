const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

let johnBMI = massJohn / (heightJohn * heightJohn);
let markBMI = massMark / (heightMark * heightMark);
// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI, markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}