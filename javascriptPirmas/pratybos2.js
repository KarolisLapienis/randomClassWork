//1

svorisPetras = 100
svorisJonas = 90
ugisPetras = 160
ugisJonas = 180

petrasKMI = skaiciuotiKMI(svorisPetras, ugisPetras)
jonasKMI = skaiciuotiKMI(svorisJonas, ugisJonas)

function skaiciuotiKMI(svoris, ugis) {
    let KMI = svoris / ((ugis / 100) ** 2)
    return KMI
}

console.log(petrasKMI)
console.log(jonasKMI)

//2.1

trikampis1StatinisX = 10;
trikampis1StatinisY = 20;
trikampis2StatinisX = 100;
trikampis2StatinisY = 200;
trikampis1Izambine = ((trikampis1StatinisX ** 2) + (trikampis1StatinisY ** 2)) ** 0.5;
/*
function skaiciuotiTrikampioIzambine(statinisX, statinisY) {
    let trikampioIzambine = ((statinisX ** 2) + (statinisY ** 2)) ** 0.5;
    return trikampioIzambine;
};
*/
console.log(trikampis1Izambine);



