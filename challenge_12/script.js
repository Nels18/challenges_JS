// Challenge12 : Evelyn Deliapp
/*
J’ai un tableau avec les températures maximum des prochains jours en entrée de mon programme. Pour chaque température ex [17, 21], je veux afficher dans la console “17 degrés dans 1 jour”, “21 degrés dans 2 jours”.

Données de test :
[17, 21, 23]
[12, 5, -5, 0, 4]
*/


//////

temperatures1 = [17, 21, 23];
temperatures2 = [12, 5, -5, 0, 4];

const showDailyTemperature = (temperatures) => {
  let message = '';

  temperatures.forEach(temperature => {
    message += `${temperature} degrés dans ${temperatures.indexOf(temperature) + 1} jour, `;
  });

  message = message.slice(0, (message.length - 2));
  message += ".";
  return message;
}

console.log('showDailyTemperature(temperatures1) :', showDailyTemperature(temperatures1));
console.log('showDailyTemperature(temperatures2) :', showDailyTemperature(temperatures2));