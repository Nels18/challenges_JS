// Challenge13 : football app

/* On va créer une app de paris foot !

Supposons que nous récupérons les données d’un service web à propos d’un certain jeu (variable ‘game’ dans le code en dessous). Dans ce challenge, on va travailler avec ces données. */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 🏁 Exercice 1

// - Créer un tableau de joueurs pour chaque équipe (variables ‘players1’ et ‘players2’).
const players1 = game.players[0];
const players2 = game.players[1];

// - Le premier joueur dans un tableau de joueurs est le gardien et les autres sont des joueurs de terrain. Pour l’équipe 1 (le Bayern de Munich), créer une variable ‘gk’ avec le nom du gardien et un tableau ‘fieldPlayers’ avec le reste des joueurs de l’équipe.

let gk;
let fieldPlayers = [];

players1.forEach(player => {
  if (0 == players1.indexOf(player)) {
    gk = player;
  } else {
    fieldPlayers.push(player);
  }
});

// - Créer un tableau ‘allPlayers’ qui contient les joueurs de chaque équipe (22 joueurs).

const allPlayers = [...players1, ...players2]

// - Pendant le match, le Bayern utilise 3 joueurs remplaçants. Créer un autre tableau ‘players1Final’ contenant tous les joueurs de l’équipe originelle ainsi que ‘Thiago’ ‘Coutinho’ et ‘Perisic’.

const players1Final = [...players1,...["Thiago", "Coutinho", "Perisic"]];

// - Basé sur l’objet game.odds, créer une variable pour chaque probabilité (appelés ‘team1’, ‘draw’ et ‘team2’).

const team1 = game.odds.team1
const draw = game.odds.x
const team2 = game.odds.team2

// - Écrire une fonction ‘printGoals’ qui prends un nombre arbitraire de joueurs et qui écrit chacun d’eux dans la console , ainsi que le nombre total de buts.
// (On suppossant que l'on doit afficher le nombre total de buts depuis le début de la saison)

const printGoals = (numberOfPlayer) => {
  let players = [];

  for (let index = 0; players.length < numberOfPlayer; index++) {
    let player = allPlayers[Math.floor(Math.random() * allPlayers.length)];
    if (!players.includes(player)) {
      players.push(player);

      console.log(`${player} : ${(Math.floor(Math.random() * 60 ) + 1)} but(s) au total.`);
    }
  }
}


// - L’équipe avec la probabilité la plus basse est celle la plus susceptible de gagner. Écrire dans la console quelle équipe a le plus de chance de gagner.
const printFavory = () => {
  let message;
  if (team1 < team2) {
    message = `Le ${game.team1} a le plus de chance de gagner.`;
  } else if (team2 < team1) {
    message = `Le ${game.team2} a le plus de chance de gagner.`;
  }

  console.log(message);
}

// console.log('players1 :', players1);
// console.log('players2 :', players2);
// console.log('gk :', gk);
// console.log('fieldPlayers :', fieldPlayers);
// console.log('allPlayers :', allPlayers);
// console.log('players1Final :', players1Final);
// console.log('team1 :', team1);
// console.log('draw :', draw);
// console.log('team2 :', team2);
// printGoals(8);
// printFavory();


// 🏁 Exercice 2

// Faire une boucle sur le tableau game.scored et afficher dans la console chaque nom de butteur ainsi que le numéro du but : (Exemple : “But 1 : Lewanoski”).

const printScorers = () => {
  for (let index = 0; index < game.scored.length; index++) {
    const scorer = game.scored[index];
    console.log(`But ${index + 1} : ${scorer}.`);
  }
}


// Faire une boucle qui calcule la moyenne des probabilités et l’écrire dans la console.
const printAverageOdds = () => {
  let sumOdds = 0;
  let nbOdds = 0;
  
  for (const key in game.odds) {
    if (Object.hasOwnProperty.call(game.odds, key)) {
      const odd = game.odds[key];
      nbOdds++
      sumOdds  += odd;
    }
  }
  
  const averageOdds = sumOdds / nbOdds;
  
  console.log('Moyenne des probabilités :', averageOdds.toFixed(2));
}


/* Afficher les 2 probabilités dans la console, mais dans un joli format comme ceci :
Probabilité de victoire pour Bayern Munich : 1,33
Probabilité d’égalité : 3,25
Probabilité de victoire de Borussia Dortmund : 6,5
Bien récupérer les noms des équipes depuis l’objet ‘game’, ne pas les “hardcoder”. */

const printOdds = () => {
  for (const key in game.odds) {
    if (Object.hasOwnProperty.call(game.odds, key)) {
      const odd = game.odds[key];
      if ('x' == key) {
        console.log(`Probabilité d’égalité : ${odd}`);
      } else {
        console.log(`Probabilité de victoire pour ${game[key]} : ${odd}`);
      }
    }
  }
}


// Créer un objet appelé ‘scorers’ qui contient le nom des joueurs qui ont marqué en propriété et le nombre de buts qu’ils ont marqué en value. Exemple :
/* {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
} */

let scorers = {};

for (let index = 0; index < game.scored.length; index++) {
  const scorer = game.scored[index];
  if (scorers.hasOwnProperty(scorer)) {
    scorers[scorer]++;
  } else {
    scorers[scorer] = 1;
  }
}


printScorers();
printAverageOdds();
printOdds();
console.log('scorers :', scorers);

