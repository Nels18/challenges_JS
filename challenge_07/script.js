// Challenge7 : tip calculator 2

/*
Mitch veut continuer son programme qui calcule le pourboire au resto. Rappel : dans son pays, généralement, c’est 15% de la facture totale lorsque celle-ci est entre 50 et 300. Si la valeur est différente, le pourboire est de 20%.

Tâches :
- Écrire une fonction ‘calcTip’ qui prend la valeur de la note en paramètre et retourne le pourboire correspondant. Testez votre fonction avec une note de 100 euros.
- Et maintenant, utilisons des tableaux ! Créer un tableau ‘bills’ contenant les données de test en dessous.
- Créez un tableau ‘tips’ contenant la valeur du pourboire de chaque note. - Calculé grâce à la fonction ‘calcTip’ que vous avez créé avant.
- Créer un tableau ‘totals’ contenant les valeurs des totaux (note + pourboire).

Données de test :
Valeur de la note : 125, 555 et 44
*/


//////

const bills = [125, 555,44];

const calcTip = (bill) => {
    let tip = (50 < bill && 300 > bill) ? bill * (15 / 100) : bill * (20 / 100);
    
    return tip;
};

let tips = bills.map(calcTip);
let totals = [];

for (let index = 0; index < bills.length; index++) {
    totals.push(bills[index] + tips[index]);
}

console.log('calcTip(100) :', calcTip(100));
console.log('tips :', tips);
console.log('totals :', totals);
