function generujSlovo(pocetPismen) {
    let slovo="";
    let pismena="abcdefghijklmnopqrstuvwxyz";
    let i=0;
    while (i<pocetPismen) {
        //let indexPismena = Math.floor(Math.random()*pismena.length) + " "; //random pismena
        let indexPismena = Math.floor(Math.random() * pismena.length + " ");
        slovo += pismena[indexPismena];
        i++;
    }
    return slovo;
}

function generujVetu(pocetSlov)
{
    let i = 0;
    let veta = "";
    while (i < pocetSlov) {
        let slovo = generujSlovo(Math.random() * 10 + 1);
        veta += slovo + " ";
        i++;
    }
    return veta;
}

// Generování deseti vět
let i = 0;
while (i<5) {
    console.log(generujVetu(Math.random() * 6 + 1));
    i++;
}
console.log(generujVetu(8));
console.log(generujVetu(6));