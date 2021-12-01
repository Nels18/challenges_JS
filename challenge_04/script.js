// *** Challenge 4 ***

// first case
const scores = [
    ['Dauphins' , [96, 108, 89]],
    ['Koalas'   , [88, 91, 110]]
]

// second case 
// const scores = [
//     ['Dauphins', [97, 112, 101]],
//     ['Koalas'   , [109, 95, 123]]
// ]

// third case
// const scores = [
//     ['Dauphins' , [97, 112, 101]],
//     ['Koalas'   , [109, 95, 106]]
// ]

const team1 = scores[0][0];
const team2 = scores[1][0];
const scoreTeam1 = scores[0][1];
const scoreTeam2 = scores[1][1];

const getSom = (accumulator, current) => accumulator + current;
const getAverageScore = scoreTeam => scoreTeam.reduce(getSom) / scoreTeam.length;
// const getWinner = (scores) => {
//     let result =`${team1} ont fait match nul ${team2}.`
//     if (getAverageScore(scoreTeam1) > getAverageScore(scoreTeam2)) {
//         result = `${team1} ont gagné`;
//     } else if (getAverageScore(scoreTeam2) > getAverageScore(scoreTeam1)) {
//         result = `${team2} ont gagné`;
//     }

//     return result;
// }
// New rule
const getWinner = (scores) => {
    let result =`${team1} ont fait match nul ${team2}.`
    if (100 < getAverageScore(scoreTeam1) || 100 < getAverageScore(scoreTeam2)) {
        if (getAverageScore(scoreTeam1) > getAverageScore(scoreTeam2)) {
            result = `${team1} ont gagné`;
        } else if (getAverageScore(scoreTeam2) > getAverageScore(scoreTeam1)) {
            result = `${team2} ont gagné`;
        }
    }

    return result;
}

averageScoreDolphins = getAverageScore(scoreTeam1).toFixed(2);
averageScoreKoalas = getAverageScore(scoreTeam2).toFixed(2);

console.log('averageScoreDolphins :', averageScoreDolphins);
console.log('averageScoreKoalas :', averageScoreKoalas);
console.log('getWinner() :', getWinner(scores));