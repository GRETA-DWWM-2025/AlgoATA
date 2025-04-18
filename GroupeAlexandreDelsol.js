let etudiants=["Jason", "Killian", "Yusuf", "Tristan", "alexandreDulon", "Mariam", "Yousra", "AlexandreDelsol", "Saïd", "Alexis"];
let G1 = [];
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// boucle de 10
for(i=0; i<10; i=i+1) {
    // Récuềre 2 nombres aléatoires
    i1 = randomIntFromInterval(0,9);
    i2 = randomIntFromInterval(0,9);
    // Stoque les 2 valeurs
    v1 = etudiants[i1];
    v2 = etudiants[i2];
    console.log(i, i1, i2, v1, v2, etudiants);
    // Ré écriture en inversant
    etudiants[i2] = v1;
    etudiants[i1] = v2;
}

console.log(etudiants);


for(i=0;i<etudiants.length;i++) {
    // Si le reste de la division de i par N est null : ligne
    if ((i % 4) == 0) {console.log('-----------------------');}
    console.log(i, etudiants[i])
}