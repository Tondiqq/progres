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

console.log(generujSlovo(8));
console.log(generujSlovo(6));