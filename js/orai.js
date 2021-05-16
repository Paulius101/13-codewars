/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelyjo, graziname: "Sausra";
Jei krituliu ne daugiau nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu virs 1000mm, tai: "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/


function orai(krituliai) {
    let suma = 0;
    for (let i = 0; i < krituliai.length; i++) {
        const diena = krituliai[i];
        suma += diena;
        if (suma === 0) {
            return "Sausra"}
            else if (suma <= 50) {
                return "Ganetinai sausa savaite"
            } else if (suma <= 200) {
                return "Lietinga savaite"
            } else if (suma >= 1000) {
                return "Barsukas turetu sedeti namie"
            } else "Labai daug lietaus";
}
}

console.log(orai([0, 0, 0, 0, 0, 0, 0]));
console.log(orai([50, 0, 10, 5, 7, 40, 15]));
console.log(orai([100, 200, 300, 400, 500, 600, 700]));
console.log(orai([50, 0, 10, 5, 7, 40, 15]));
console.log(orai([100, 100, 100, 100, 100, 100, 100]));