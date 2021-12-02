// Challenge11 : calcul d’IMC 2
/*
Retournons avec Bernard et Marcel qui comparent leurs IMC ! Cette fois-ci, utilisons des objets pour implémenter le calcul.

Rappel : IMC = poids / taille² = poids / (taille * taille)

Tâches :
- Pour chacun, créer un objet avec des propriétés pour leurs prénom, poids et taille.
- Créer une méthode ‘calcBMI’ dans chacun des objets permettant de calculer l’IMC. Stockez la valeur calculée dans une propriété de l’objet et aussi la retourner dans la méthode.
- Afficher dans la console qui a l’IMC le plus élevé de cette manière : “L’IMC de Bernard (20,2) est plus élevé que celui de Marcel (19,3)”

Données de test :
Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.
*/

//////

// First case
let bernard = {
  firstName : "Bernard",
  weight : 78,
  height : 1.69,
  bmi: null,
  calcBMI : function () {
    return this.bmi = this.weight / (this.height * this.height);
  },
}

let marcel = {
  firstName : "Marcel",
  weight : 92,
  height : 1.95,
  bmi: null,
  calcBMI : function () {
    return this.bmi = this.weight / (this.height * this.height);
  },
}

// Second case
// let bernard = {
//   firstName : "Bernard",
//   weight : 95,
//   height : 1.88,
//   bmi: null,
//   calcBMI : function () {
//     return this.bmi = this.weight / (this.height * this.height);
//   },
// }

// let marcel = {
//   firstName : "Marcel",
//   weight : 85,
//   height : 1.76,
//   bmi: null,
//   calcBMI : function () {
//     return this.bmi = this.weight / (this.height * this.height);
//   },
// }

const compareBMI = (people1, people2) => {
  let message;

  people1.calcBMI();
  people2.calcBMI();

  if (people1.bmi > people2.bmi) {
    message = `L’IMC de ${people1.firstName} (${people1.bmi.toFixed(2)}) est plus élevé que celui de ${people2.firstName} (${people2.bmi.toFixed(2)})`;
  } else if (people1.bmi < people2.bmi) {
    message = `L’IMC de ${people2.firstName} (${people2.bmi.toFixed(2)}) est plus élevé que celui de ${people1.firstName} (${people1.bmi.toFixed(2)})`;
  } else if (people1.bmi == people2.bmi) {
    message = `${people1.firstName} et ${people2.firstName} ont le même IMC.`;
  }

  return message;
}

console.log(compareBMI(bernard, marcel));