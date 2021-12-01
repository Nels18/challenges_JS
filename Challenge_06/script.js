// Challenge 6 : compétition de gymnastique, le retour

/*
De retour avec nos équipes de gymnastique : Les Dauphins et les Koalas ! Il y’a une nouvelle discipline qui fonctionne différemment.

Chaque équipe joue 3 fois, ensuite la moyenne des 3 scores est calculée (donc une moyenne par équipe).

Une équipe gagne seulement si elle a au moins le double de la moyenne de score de l’autre équipe. Sinon, personne ne gagne !

Tâches :
- Créer une arrow function “calcAverage” qui calcule la moyenne des 3 scores.
- Utiliser la fonction pour calculer la moyenne de chaque équipe.
- Créer une fonction “checkWinner” qui prend les 2 moyennes de scores et qui log dans la console l’équipe gagnante : “L’équipe Koala gagne (30 vs 13)”.
- Utiliser la fonction “checkWinner”.
- Ignorer l’égalité cette fois-ci.

Données de test :
Score Dauphins : 44, 23, 71 / Score Koalas : 65, 54, 49
Score Dauphins : 85, 54, 41 / Score Koalas : 23, 34, 27
*/


//////

// First case
// const scores = [
//     ['Dauphins' , [44, 23, 71]],
//     ['Koalas'   , [65, 54, 49]]
// ]

// Second case
const scores = [
    ['Dauphins' , [85, 54, 41]],
    ['Koalas'   , [23, 34, 27]]
]

const team1 = scores[0][0];
const team2 = scores[1][0];
const scoreTeam1 = scores[0][1];
const scoreTeam2 = scores[1][1];

const getSom = (accumulator, current) => accumulator + current;
const calcAverage = scoreTeam => scoreTeam.reduce(getSom) / scoreTeam.length;


const averageTeam1 = calcAverage(scoreTeam1);
const averageTeam2 = calcAverage(scoreTeam2);

const checkWinner = (score) => {
    let winner = '';
    let result = 'Pas de gagnant.';

    if (averageTeam1 > (averageTeam2 * 2)) {
        winner = team1;
    } else if (averageTeam2 > (averageTeam1 * 2)) {
        winner = team2;
    }

    if ('' != winner) {
        result = `L’équipe des ${winner} gagne (${averageTeam1} vs ${averageTeam2}).`;
    }

    return result;
};

console.log('checkWinner(scores) :', checkWinner(scores));