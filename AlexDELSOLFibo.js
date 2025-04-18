let F=[0,1];

// console.log(F)
for (let i = 0; i < 8; i++) {
    let A=F[i]+F[i+1];
    F.push(A);
    //console.log(F);
}

console.log(`La suite de Fibonacci est ${F}`);