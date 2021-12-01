// Challenge8 : tip calculator 3.0
/*
  Améliorons encore le calculateur de pourboire de Mitch avec des boucles !

  Tâches :
  - Créer un tableau de notes qui contient toutes les notes des données de tests en dessous.
  - Créer un tableau pour les pourboires et les totaux (‘tips’ et ‘totals’).
  - Utilisez la fonction ‘calcTip’ que vous aviez codée précédemment pour calculer le pourboire et le total pour chaque note et les mettre dans leurs tableaux correspondants.
  - Bonus : Écrire une fonction ‘calcAverage’ qui prend un tableau comme argument et qui calcule la moyenne de tous les nombres du tableau. Écrire dans la console la moyennes des totaux.

  Données de test :
  Valeurs des notes : 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
*/


//////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = bill => {
  let tip = (50 < bill && 300 > bill) ? bill * (15 / 100) : bill * (20 / 100);
  
  return tip;
};

const calcAverage = bills => {
  let sum = 0;
  bills.forEach(bill => {
    sum += bill;
  });

  return sum / bills.length;
}

tips = bills.map(calcTip);

for (let index = 0; index < bills.length; index++) {
  totals.push(bills[index] + tips[index]);
}


console.log('tips :', tips);
console.log('totals :', totals);
console.log('calcAverage(bills) :', calcAverage(bills));
console.log('calcAverage(tips) :', calcAverage(tips));
console.log('calcAverage(totals) :', calcAverage(totals));