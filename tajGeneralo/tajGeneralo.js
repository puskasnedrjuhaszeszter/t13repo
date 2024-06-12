function randomElsoNyolcSzam() {
    var szamTomb = [];
    for (var i = 0; i < 8; i++) {
        var generaltSzam = Number(Math.round(Math.random() * 9));
        szamTomb.push(generaltSzam);
    }
    return szamTomb;
}
function osszeado(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (i % 2 == 0) {
            osszeg += Number(vizsgaltTomb[i]) * 3;
        }
        else {
            osszeg += Number(vizsgaltTomb[i]) * 7;
        }
    }
    console.log(osszeg);
    return osszeg;
}
function aKilencedik(osszeg) {
    var kilencedik = osszeg % 10;
    return kilencedik;
}
function tajszamKiir() {
    var elsoNyolc = randomElsoNyolcSzam();
    var kilencedik = aKilencedik(osszeado(randomElsoNyolcSzam()));
    console.log("Az új TAJ szám: " + elsoNyolc + "," + kilencedik);
}
tajszamKiir();
