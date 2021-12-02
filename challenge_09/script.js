// Challenge9 : Décode le message

/*
Pour faire ce challenge, assure toi d’avoir bien vu les cours sur :

opérateurs conditionnels ;
boucles
Votre objectif est de décoder un message en utilisant les boucles.

🏁 Exercice 1
Ici, nous avons un tableau avec beaucoup de string différentes. Ta mission est d’utiliser une boucle pour ignorer la lettre “X” (en utilisant une condition) et console.log pour révéler le message.

🏁 Exercice 2
Maintenant, nous avons une très longue chaîne de caractère qui contient le code secret.
Pour la décoder, tu dois d’abord trouver un moyen de convertir cette chaîne en un tableau, puis utiliser une boucle pour enlever la lettre “X” (en utilisant une condition) et les nombres pairs.

Copie/colle sur ton éditeur de code préféré et amuse toi !
*/


//////

// Welcome to DonkeyDecode, your mission is to decode the full message. Good luck

// EX 01 -  Use a loop to remove the 'X' and use console.log to reveal the message 
const hiddenMessage = ["X", "X", "X", "X", "W", "X", "E",  "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", " ","X", "X", "X", "X", "X", "X", "X", "X", "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ",", "X", " ", "X"]

let decodedMessage =[];

hiddenMessage.forEach(letter => {
    if ('X' != letter) {
        decodedMessage.push(letter);
    }
});

console.log('decodedMessage :', decodedMessage);


// EX 02 - Remove the 'X' and the even numbers
// Hint: As this is a string you should find a way to convert into an array.

const hiddenCode = "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX"

// Your code goes here

let arrayCode = hiddenCode.split('');
let decodedCode = [];
arrayCode.forEach(letter => {
    if ('X' != letter) {
        decodedCode.push(letter);
    }
});

console.log('decodedCode :', decodedCode);
