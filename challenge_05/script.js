// Challenge 5 : tip calculator

/*
Mitch veut créer un programme simple qui calcule le pourboire au resto. Dans son pays, généralement, c’est 15% de la facture totale lorsque celle-ci est entre 50 et 300. Si la valeur est différente, le pourboire est de 20%.

Tâches :
Calculer le pourboire en fonction du montant de la facture. Bonus : utilisez un ternaire au lieu de if / else.
Écrire dans la console une phrase contenant toutes les informations :
“La note était de 275, le pourboire de 41,25 et la valeur totale était de 316,25”.

Données de test :
Valeur de la note : 275, 40 et 430
*/

const bills = [275, 40, 430];

const getSum = (bill, tip) => bill + tip;

let tips = bills.map(function (bill) {
  return 50 < bill && 300 > bill ? bill * (15 / 100) : bill * (20 / 100);
});

for (let index = 0; index < bills.length; index++) {
  let result = `La note était de ${bills[index]}, le pourboire de ${
    tips[index]
  } et la valeur totale était de ${getSum(bills[index], tips[index])}.`;

  console.log("result :", result);
}
