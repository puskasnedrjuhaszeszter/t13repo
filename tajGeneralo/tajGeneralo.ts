function randomElsoNyolcSzam(): number[] {
    let szamTomb: number[] = [];
    for (let i: number = 0; i < 8; i++) {
        let generaltSzam: number = Number(Math.round(Math.random() * 9));
        szamTomb.push(generaltSzam);
    }
    return szamTomb;
}

function osszeado(vizsgaltTomb: number[]): number {
    let osszeg: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
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

function aKilencedik(osszeg: number): number {
    var kilencedik: number = osszeg % 10
    return kilencedik;
}

function tajszamKiir(): void {
    var elsoNyolc: number[] = randomElsoNyolcSzam();
    var kilencedik: number = aKilencedik(osszeado(randomElsoNyolcSzam()));
    console.log("Az új TAJ szám: " + elsoNyolc + "," + kilencedik);
}

tajszamKiir();
