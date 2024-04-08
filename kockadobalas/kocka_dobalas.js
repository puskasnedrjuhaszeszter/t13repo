var dobasok = [];

function KockaDobas() {
    return Math.round(Math.random() * 5) + 1;
}

function TobbKockaDobas(dobasokMennyisege) {
    let tobbDobas = [];
    for (let i = 0; i < dobasokMennyisege; i++) {
        tobbDobas.push(KockaDobas());
    }
    return tobbDobas;
}

kockaEldobasa.addEventListener("click", () => { KockaMegjelenites(3) });

function KockaMegjelenites(dobasokMennyisege) {
    let megtortentDobasok = TobbKockaDobas(dobasokMennyisege);
    for (let i = 0; i < megtortentDobasok.length; i++) {
        dobasok.push(megtortentDobasok[i]);
    }
    MaxDobas(megtortentDobasok);
    TriplaHatos(megtortentDobasok);
    Egyformak(megtortentDobasok);
    Kulonbozok(megtortentDobasok);
    csakParatlan(megtortentDobasok);
    csakParos(megtortentDobasok);
    sorozat(megtortentDobasok);

    DobasElofordulasok(aktDobasOsszeg(megtortentDobasok));
    console.log(dobasOsszegekMennyiseg);

    legritkabbDobasKereso(legritkabbDobasOsszeg(dobasOsszegekMennyiseg));
    leggyakoribbDobasKereso(leggyakoribbDobasOsszeg(dobasOsszegekMennyiseg));

    document.querySelector("#kockaKep01").style.backgroundImage = "url(img/" + megtortentDobasok[0] + ".png)";
    document.querySelector("#kockaKep02").style.backgroundImage = "url(img/" + megtortentDobasok[1] + ".png)";
    document.querySelector("#kockaKep03").style.backgroundImage = "url(img/" + megtortentDobasok[2] + ".png)";

}

function DobasokSzama() {
    let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dobasok.length; i++) {
        dobasMennyiseg[0] += dobasok[i];
        dobasMennyiseg[dobasok[i]]++;
    }
    return dobasMennyiseg;
}

kockaEldobasa.addEventListener("click", () => { StatisztikaKiir(DobasokSzama()) });

function AtlagSzamitas(eredmenyek) {
    return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
    document.querySelector("#egyes").innerHTML = eredmenyek[1];
    document.querySelector("#kettes").innerHTML = eredmenyek[2];
    document.querySelector("#harmas").innerHTML = eredmenyek[3];
    document.querySelector("#negyes").innerHTML = eredmenyek[4];
    document.querySelector("#otos").innerHTML = eredmenyek[5];
    document.querySelector("#hatos").innerHTML = eredmenyek[6];
    document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
    document.querySelector("#osszesen").innerHTML = eredmenyek[0];
    document.querySelector("#atlag").innerHTML = AtlagSzamitas(eredmenyek).toFixed(2);

    document.querySelector("#kettesStat").innerHTML = Math.round(szazalekSzamitas(eredmenyek, 2)) + "%";
    document.querySelector("#negyesStat").innerHTML = Math.round(szazalekSzamitas(eredmenyek, 4)) + "%";
    document.querySelector("#hatosStat").innerHTML = Math.round(szazalekSzamitas(eredmenyek, 6)) + "%";
}

function MaxDobas(aktDobasok) {
    let aktDobasOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
    let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
    if (aktDobasOsszege > eddigiLegnagyobb) {
        document.querySelector("#legnagyobb").innerHTML = aktDobasOsszege;
    }
}

function TriplaHatos(aktDobasok) {
    if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
        document.querySelector("#triplaHat").innerHTML = "Volt";
    }
}

function Egyformak(aktDobasok) {
    if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
        let regiErtek = document.querySelector("#egyformak").innerHTML;
        document.querySelector("#egyformak").innerHTML = Number(regiErtek) + 1;
    }
}

function Kulonbozok(aktDobasok) {
    if (aktDobasok[0] != aktDobasok[1] && aktDobasok[1] != aktDobasok[2] && aktDobasok[0] != aktDobasok[2]) {
        let regiErtek = document.querySelector("#kulonbozoek").innerHTML;
        document.querySelector("#kulonbozoek").innerHTML = Number(regiErtek) + 1;
    }
}

var dobasOsszegek = [];
function aktDobasokObjektuma(aktDobasok) {
    let aktDobas = {
        elsoKocka: aktDobasok[0],
        masodikKocka: aktDobasok[1],
        harmadikKocka: aktDobasok[2],
        dobasOsszege: aktDobasok[0] + aktDobasok[1] + aktDobasok[2]
    }
    dobasOsszegek.push(aktDobas);
}

let dobasOsszegekMennyiseg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function aktDobasOsszeg(aktDobasok) {
    return aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
}

function DobasElofordulasok(aktDobasOsszeg) {
    dobasOsszegekMennyiseg[aktDobasOsszeg]++;
}

function legritkabbDobasOsszeg(dobasOsszegekMennyiseg) {
    let legritkabbOsszeg = dobasOsszegekMennyiseg[0];
    for (let i = 3; i < dobasOsszegekMennyiseg.length; i++) {
        if (dobasOsszegekMennyiseg[i] < legritkabbOsszeg) {
            legritkabbOsszeg = dobasOsszegekMennyiseg[i];
        }
    }
    return legritkabbOsszeg;
}

function legritkabbDobasKereso(legritkabbOsszeg) {
    let legritkabbOsszegTomb = [];
    for (let i = 3; i < dobasOsszegekMennyiseg.length; i++) {
        if (legritkabbOsszeg == dobasOsszegekMennyiseg[i]) {
            legritkabbOsszegTomb.push(i);
        }
    }
    document.querySelector("#legritkabb").innerHTML = legritkabbOsszegTomb;
}

function leggyakoribbDobasOsszeg(dobasOsszegekMennyiseg) {
    let leggyakoribbOsszeg = dobasOsszegekMennyiseg[0];
    for (let i = 3; i < dobasOsszegekMennyiseg.length; i++) {
        if (leggyakoribbOsszeg < dobasOsszegekMennyiseg[i]) {
            leggyakoribbOsszeg = dobasOsszegekMennyiseg[i];
        }
    }
    return leggyakoribbOsszeg;
}

function leggyakoribbDobasKereso(leggyakoribbOsszeg) {
    let leggyakoribbOsszegTomb = [];
    for (let i = 3; i < dobasOsszegekMennyiseg.length; i++) {
        if (leggyakoribbOsszeg == dobasOsszegekMennyiseg[i]) {
            leggyakoribbOsszegTomb.push(i);
        }
    }
    document.querySelector("#leggyakoribb").innerHTML = leggyakoribbOsszegTomb;
}

function szazalekSzamitas(eredmenyek, keresett_ertek) {
    return szazalekLab = eredmenyek[keresett_ertek] / ((dobasok.length / 100));
}

function csakParatlan(aktDobasok) {
    if (aktDobasok[0] % 2 != 0 && aktDobasok[1] % 2 != 0 && aktDobasok[2] % 2 != 0) {
        let regiErtek = document.querySelector("#paratlanok").innerHTML;
        document.querySelector("#paratlanok").innerHTML = Number(regiErtek) + 1;
    }
}

function csakParos(aktDobasok) {
    if (aktDobasok[0] % 2 == 0 && aktDobasok[1] % 2 == 0 && aktDobasok[2] % 2 == 0) {
        let regiErtek = document.querySelector("#parosak").innerHTML;
        document.querySelector("#parosak").innerHTML = Number(regiErtek) + 1;
    }
}

function sorozat(aktDobasok) {
    if (aktDobasok[1] - aktDobasok[0] == aktDobasok[2] - aktDobasok[1]) {
        document.querySelector("#sorozat").innerHTML = aktDobasok[0] + ", " + aktDobasok[1] + ", " + aktDobasok[2];
    }
}


