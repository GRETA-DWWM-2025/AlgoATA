function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Liste de base
let T = [
  "Jason", "Killian", "Yusuf", "Tristan", "Alexandre(steeve)",
  "Mariam", "Yousra", "Alexandre", "Saïd", "Alexis"
];

// Étape 1 : Mélanger le tableau (Fisher–Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = randomIntFromInterval(0, i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(T);

// Étape 2 : Répartir en 3 groupes
let groupe1 = [];
let groupe2 = [];
let groupe3 = [];

for (let i = 0; i < T.length; i++) {
  if (i % 3 === 0) {
    groupe1.push(T[i]);
  } else if (i % 3 === 1) {
    groupe2.push(T[i]);
  } else {
    groupe3.push(T[i]);
  }
}

// Étape 3 : Afficher les groupes
console.log("Groupe 1:", groupe1);
console.log("Groupe 2:", groupe2);
console.log("Groupe 3:", groupe3);