// *** Challenge 3 ***


// ex1
const weightBernard = 78;
const heightBernard = 1.69;
const weightMarcel = 92;
const heightMarcel = 1.95;

// const weightBernard = 95;
// const heightBernard = 1.88;
// const weightMarcel = 85;
// const heightMarcel = 1.76;

const getIMC = (weight, height) => weight / (height * height);

const bernardIMC =getIMC(weightBernard,heightBernard);
const marcelIMC =getIMC(weightMarcel,heightMarcel);


const roundIMC = (imc) => Math.round(imc);
// const bernardHigherIMC = (bernardIMC > marcelIMC) ? 'Yes' : 'No';

const roundedBernardIMC = roundIMC(bernardIMC);
const roundedMarcelIMC = roundIMC(marcelIMC);
// console.log('bernardIMC :', (bernardIMC));
// console.log('marcelIMC :', marcelIMC);


// ex2

const bernardHigherIMC = (bernardIMC > marcelIMC) ? `Bernard(${roundedBernardIMC}) has a higher IMC than Marcel(${roundedMarcelIMC})` : `Bernard(${roundedBernardIMC}) does\'n have a higher IMC than Marcel(${roundedMarcelIMC})`;

console.log('bernardHigherIMC :', bernardHigherIMC);

// ex3
let message = '';
const compareIMC = (imc) =>
{
    message = "Insuffisance pondérale";
    if (30 <= imc) {
        message = "Obésité";
        if (40 > imc) {
            message = "Obésité importante";
        }
    } else if (20 <= imc) {
        message = "Poids normal";
        if (25 <= imc) {
            message = "Surpoids";
        }
    }

    return message;
}

console.log('Bernard : ' + compareIMC(bernardIMC));
console.log('Marcel : ' + compareIMC(marcelIMC));