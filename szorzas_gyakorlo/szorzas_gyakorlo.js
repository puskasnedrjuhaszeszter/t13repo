function szam_generator() {
    let szam = Number(Math.round(Math.random() * 9)) + 1;
    return szam;
}

const elso_szam = szam_generator();
const masodik_szam = szam_generator();

function feladat_ado() {
    let akt_elso_szam = elso_szam;
    let akt_masodik_szam = masodik_szam;
    document.querySelector("#szorzas").innerHTML = (`Mennyi ${akt_elso_szam} szor ${akt_masodik_szam}?`);
}

function kiszamolo() {
    let szorzat = elso_szam * masodik_szam;
    return szorzat;
}
kiszamolo(elso_szam, masodik_szam);

var ido = [];

function kezdo_ido_bekero() {
    let kezdo_ido = Date.now();
    ido.push(kezdo_ido);
    return kezdo_ido;
}
function befejezesi_ido_bekero() {
    let befejezesi_ido = Date.now();
    ido.push(befejezesi_ido);
    return befejezesi_ido;
}
function kesz_gomb_feloldo() {
    document.querySelector("#kesz").disabled = false;
}

let start_eventGomb = document.querySelector("#start");
start_eventGomb.addEventListener("click", () => { feladat_ado(elso_szam, masodik_szam) });
start_eventGomb.addEventListener("click", kesz_gomb_feloldo);
start_eventGomb.addEventListener("click", kezdo_ido_bekero);

function eredmeny_kiirato() {
    let adott_szorzat = kiszamolo(elso_szam, masodik_szam);
    let valasz = document.querySelector("#valasz").value
    if (adott_szorzat == valasz) {
        document.querySelector("#eredmeny").innerHTML = (`HELYES VÁLASZ!<br>${elso_szam} és ${masodik_szam} szorzata valóban ${adott_szorzat}.`);
        document.querySelector("#kep").src = "happy.png";
    }
    else {
        document.querySelector("#eredmeny").innerHTML = (`${elso_szam} és ${masodik_szam} szorzata <b>${adott_szorzat}</b>, nem pedig ${valasz}.<br> KÉRLEK GYAKOROLJ MÉG!`);
        document.querySelector("#kep").src = "sad.jpg";
    }
}

let kesz_eventGomb = document.querySelector("#kesz");
kesz_eventGomb.addEventListener("click", befejezesi_ido_bekero);
kesz_eventGomb.addEventListener("click", eredmeny_kiirato);

function ido_kiszamolo() {
    let gyorsasag = Math.round((ido[1] - ido[0]) / 1000);
    return gyorsasag;
}

function ido_kiirato() {
    let akt_gyorsasag = ido_kiszamolo();
    if (akt_gyorsasag < 8) {
        document.querySelector("#sebesseg").innerHTML = (`Gyors voltál!<br> ${akt_gyorsasag} másodperc alatt válaszoltál.`);
    }
    else {
        document.querySelector("#sebesseg").innerHTML = (`Lehetne ezt gyorsabban is!<br> ${akt_gyorsasag} másodperc alatt válaszoltál.`);
    }
}

let gyorsasag_eventGomb = document.querySelector("#gyorsasag");
kesz_eventGomb.addEventListener("click", ido_kiirato);

function uj_feladat() {
    window.location.reload();
}

let ujra_eventGomb = document.querySelector("#ujra");
ujra_eventGomb.addEventListener("click", uj_feladat);

