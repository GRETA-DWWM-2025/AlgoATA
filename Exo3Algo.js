// Fonction pour générer les n premiers termes de la suite de Fibonacci
function fibonacci(n) {
    let fibSequence = [0, 1]; // Les deux premiers termes de la suite

    // Génère les termes suivants jusqu'à n
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}

// Exemple d'utilisation : afficher les 10 premiers termes de la suite de Fibonacci
console.log(fibonacci(10));