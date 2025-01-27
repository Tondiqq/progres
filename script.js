function generujSlovo(pocetPismen) {
    let slovo = "";
    let pismena = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    while (i < pocetPismen) {
        let indexPismena = Math.floor(Math.random() * pismena.length);
        slovo += pismena[indexPismena];
        i++;
    }
    return slovo;
}

function generujVetu(pocetSlov) {
    let i = 0;
    let veta = "";
    while (i < pocetSlov) {
        let slovo = generujSlovo(Math.floor(Math.random() * 10 + 1));
        veta += slovo + " ";
        i++;
    }
    // Upravíme první písmeno na velké a přidáme tečku na konec
    veta = veta.trim();
    veta = veta.charAt(0).toUpperCase() + veta.slice(1) + ".";
    return veta;
}

function generujOdstavec() {
    let odstavec = "";
    for (let i = 0; i < 10; i++) {
        odstavec += generujVetu(Math.floor(Math.random() * 6 + 5)) + " "; // Generujeme větu mezi 5 a 10 slovy
    }
    return odstavec.trim(); // Odstraníme případnou nadbytečnou mezeru na konci
}

console.log(generujOdstavec());