let tableauDesordre = [27, 17, 81, 200, 87, 17, 2];

    let tableauEnOrdre = [];
    let min;
    let indexOf = 0;
    while (tableauDesordre.length > 0) {
        for (i = 0; i < tableauDesordre.length; i++) {
            if (i = 0) {
                min = tableauDesordre[i];
            }
            if (tableauDesordre[i] < min) {
                min = tableauDesordre[i];
                indexOf = i;
            }
        }
        tableauEnOrdre.push(min);
        tableauDesordre.splice(indexOf);
    }
    console.log(tableauEnOrdre);
    console.log(tableauDesordre);

    // tableauDesordre.sort((a, b) => a - b);
    // console.log(tableauDesordre);