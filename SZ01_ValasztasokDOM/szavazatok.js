const szavazatok = [
    { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
    { korzet: 1, szavazat: 120, nev: " Alma Dalma", part: "GYEP" },
    { korzet: 7, szavazat: 162, nev: " Bab Zsuzsanna", part: "ZEP" },
    { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
    { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
    { korzet: 1, szavazat: 154, nev: " Bors Botond", part: "HEP" },
    { korzet: 5, szavazat: 188, nev: " Brokkoli Gyula", part: "ZEP" },
    { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
    { korzet: 4, szavazat: 143, nev: " Fasirt Ferenc", part: "HEP" },
    { korzet: 8, szavazat: 157, nev: " Gomba Gitta", part: "TISZ" },
    { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
    { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
    { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
    { korzet: 5, szavazat: 288, nev: " Joghurt Jakab", part: "TISZ" },
    { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
    { korzet: 2, szavazat: 187, nev: " Kapor Karola", part: "ZEP" },
    { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
    { korzet: 6, szavazat: 187, nev: " Kefir Ilona", part: "TISZ" },
    { korzet: 7, szavazat: 130, nev: " Kupa Huba", part: "-" },
    { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
    { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
    { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
    { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
    { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
    { korzet: 4, szavazat: 221, nev: " Monitor Tibor", part: "-" },
    { korzet: 8, szavazat: 288, nev: " Narancs Edmond", part: "GYEP" },
    { korzet: 2, szavazat: 220, nev: " Oldalas Olga", part: "HEP" },
    { korzet: 3, szavazat: 185, nev: " Pacal Kata", part: "HEP" },
    { korzet: 1, szavazat: 199, nev: " Petrezselyem Petra", part: "ZEP" },
    { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
    { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
    { korzet: 3, szavazat: 156, nev: " Retek Etelka", part: "ZEP" },
    { korzet: 7, szavazat: 129, nev: " Sajt Hajnalka", part: "TISZ" },
    { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
    { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
    { korzet: 3, szavazat: 187, nev: " Tejes Attila", part: "TISZ" },
    { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
    { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
    { korzet: 6, szavazat: 288, nev: " Vadas Marcell", part: "HEP" },
    { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
];

//1. feladat
function kepviselok_szama(vizsgaltTomb){
    return vizsgaltTomb.length;
}

function kepviselok_szama_kiirato(){
    let kepviselok_ossz=kepviselok_szama(szavazatok);
    document.querySelector("#f1").innerHTML= "A helyhatósági választásokon " + kepviselok_ossz + " képviselőjelölt indult.";
}

let f1_eventGomb=document.querySelector("#f1gomb");
f1_eventGomb.addEventListener("click", kepviselok_szama_kiirato);
f1_eventGomb.addEventListener("click", eltunteto_f1);

function eltunteto_f1() {
    let f1_elem = document.querySelector("#f1");
    let f1_gomb = document.querySelector("#f1gomb");
    let f1_allapot = f1_elem.style.display;
    if (f1_allapot != "block") {
        f1_elem.style.display = "block";
        f1_gomb.value = "Köszönöm a választ!";
    }
    else {
        f1_elem.style.display = "none";
        f1_gomb.value = "Válasz:";
    }
}

//2. feladat
function part_kiolvaso(){
    let megadott_part=document.querySelector("#f2menu").value;
    return megadott_part;
}

function part_megszamlalo(vizsgaltTomb, a_part){
    let adott_part_mennyiseg=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].part==a_part){
            adott_part_mennyiseg++;
        }
    }
    return adott_part_mennyiseg;
}

function part_neve(partok){
    if(partok=="GYEP"){
        return "Gyümölcsevők Pártja";
    }
    if(partok=="HEP"){
        return "Húsevők Pártja";
    }
    if(partok=="TISZ"){
        return "Tejivók Szövetsége";
    }
    if(partok=="ZEP"){
        return "Zöldségevők Pártja";
    }
    if(partok=="-"){
        return "Független";
    }
}

function partmennyiseg_kiir(){
    let megadott_part = part_kiolvaso();
    let part_mennyiseg = part_megszamlalo(szavazatok, megadott_part);
    if(megadott_part=="-"){
        document.querySelector("#f2").innerHTML=`${part_neve(megadott_part)} képviselőként ${part_mennyiseg} képviselő indult a helyhatósági választásokon.`;
    }
    else{
    document.querySelector("#f2").innerHTML=`A ${part_neve(megadott_part)} ${part_mennyiseg} képviselőt indított a helyhatósági választásokon.`;
    }
}

let f2_eventGomb=document.querySelector("#f2gomb");
f2_eventGomb.addEventListener("click", partmennyiseg_kiir);
f2_eventGomb.addEventListener("click", eltunteto_f2);

function eltunteto_f2() {
    let f2_elem = document.querySelector("#f2");
    let f2_gomb = document.querySelector("#f2gomb");
    let f2_allapot = f2_elem.style.display;
    if (f2_allapot != "block") {
        f2_elem.style.display = "block";
        f2_gomb.value = "Köszönöm a választ!";
    }
    else {
        f2_elem.style.display = "none";
        f2_gomb.value = "Válasz:";
    }
}

//3. feladat
function jelolt_kiolvaso(){
    let megadott_nev=document.querySelector("#f3input").value.trim();
    return megadott_nev;
}

function jelolt_kereso(vizsgaltTomb, jelolt_neve){
        let szerepelE=false;
        for(let i=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].nev.trim()==jelolt_neve){
                szerepelE=true;
            }
        }
        return szerepelE;
    }

function jelolt_index_kereso(vizsgaltTomb, jelolt_neve){
        let jelolt_index=0;
        for(let i=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].nev.trim()==jelolt_neve){
                jelolt_index=i;
            }
        }
        return jelolt_index;
    }

function kepviselo_kiir(){
    let adott_nev = jelolt_kiolvaso();
    let keresett_jelolt = jelolt_kereso(szavazatok, adott_nev);
    let keresett_index = jelolt_index_kereso(szavazatok, adott_nev)
    if(keresett_jelolt==true){
        document.querySelector("#f3").innerHTML=`A ${adott_nev} jelölt ${szavazatok[keresett_index].szavazat} szavazatot kapott a helyhatósági választásokon.`;
    }
    else{
        document.querySelector("#f3").innerHTML=`Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!`;
    }
}

let f3_eventGomb=document.querySelector("#f3gomb");
f3_eventGomb.addEventListener("click", kepviselo_kiir);
f3_eventGomb.addEventListener("click", eltunteto_f3);

function eltunteto_f3() {
    let f3_elem = document.querySelector("#f3");
    let f3_gomb = document.querySelector("#f3gomb");
    let f3_allapot = f3_elem.style.display;
    if (f3_allapot != "block") {
        f3_elem.style.display = "block";
        f3_gomb.value = "Köszönöm a választ!";
    }
    else {
        f3_elem.style.display = "none";
        f3_gomb.value = "Jelölt nevének megadása:";
    }
}

//4. feladat
function szavazat_szamlalo(vizsgaltTomb){
    let ossz_szavazat=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
            ossz_szavazat += vizsgaltTomb[i].szavazat;
    }
    return ossz_szavazat;
    }

function arany_szamolo(szavazati_arany){
    let reszveteli_arany = (szavazati_arany/123.45).toFixed(2);
    return reszveteli_arany;
}

function arany_kiir(){
    let reszvetel=szavazat_szamlalo(szavazatok);
    let arany=arany_szamolo(szavazat_szamlalo(szavazatok));
    document.querySelector("#f4").innerHTML=`A választáson ${reszvetel} állampolgár, a jogosultak ${arany} %-a vett részt.`;
}

let f4_eventGomb=document.querySelector("#f4gomb");
f4_eventGomb.addEventListener("click", arany_kiir);
f4_eventGomb.addEventListener("click", eltunteto_f4);

function eltunteto_f4() {
    let f4_elem = document.querySelector("#f4");
    let f4_gomb = document.querySelector("#f4gomb");
    let f4_allapot = f4_elem.style.display;
    if (f4_allapot != "block") {
        f4_elem.style.display = "block";
        f4_gomb.value = "Köszönöm a választ!";
    }
    else {
        f4_elem.style.display = "none";
        f4_gomb.value = "Részvételi arány:";
    }
}

//5. feladat
function part_kivalogato(vizsgaltTomb){
    let part_lista=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        let szerepel_e=false;
        let adott_part=vizsgaltTomb[i].part;
        for(let j=0;j<part_lista.length;j++){
            if(adott_part==part_lista[j]){
                szerepel_e=true;
            }
        }
        if(szerepel_e==false){
            part_lista.push(adott_part);
        }
    }
    return part_lista;
}

function szavazat_megszamolo(vizsgaltTomb, partok_listaja){
    let szavazatok_mennyisege=[];
    for(let i=0;i<partok_listaja.length;i++){
        szavazatok_mennyisege.push(0);
        }
    for(let i=0;i<vizsgaltTomb.length;i++){
    let adott_part=vizsgaltTomb[i].part;
    let adott_szavazat=vizsgaltTomb[i].szavazat;
        for(let j=0;j<partok_listaja.length;j++){
            if(adott_part==partok_listaja[j]){
                szavazatok_mennyisege[j]+=adott_szavazat;
            }
        }
    }
    return szavazatok_mennyisege;
}

let felugro_ablak = document.querySelector("#szavazatok_tabla");
let feladat_sor = document.querySelector("#feladatsor");

function szavazatok_mennyisege_tablazat(){
    felugro_ablak.style.display = "block";
    feladat_sor.style.filter = "blur(3px)";
    let indulo_partok=part_kivalogato(szavazatok);
    let szavazatok_eloszlasa=szavazat_megszamolo(szavazatok,indulo_partok);
    let table=document.querySelector("#f5");

    if (table.rows.length > 2) {
        table.deleteRow(table.rows.length);
    }
    for(let i=0;i<indulo_partok.length;i++){
        let adatSor=table.insertRow(1);
        let a_part=adatSor.insertCell(0);
        let eloszlas=adatSor.insertCell(1);
        a_part.innerHTML=part_neve(indulo_partok[i]);
        eloszlas.innerHTML=szavazatok_eloszlasa[i];
    }
   
}

let xgomb = document.querySelector("#x_gomb");
xgomb.addEventListener("click", function () {
    felugro_ablak.style.display = "none";
    feladat_sor.style.filter = "blur(0px)";
})

let f5_eventGomb=document.querySelector("#f5gomb");
f5_eventGomb.addEventListener("click", szavazatok_mennyisege_tablazat);

//6. feladat
function legtobb_szavazat_ertek_kereso(vizsgaltTomb){
	let max_szavazat=vizsgaltTomb[0].szavazat;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].szavazat>=max_szavazat){
        	max_szavazat=vizsgaltTomb[i].szavazat;
        }
    }
    return max_szavazat;
}

function legtobb_szavazat_kivalogato(vizsgaltTomb){
	let legtobb_szavazat=legtobb_szavazat_ertek_kereso(szavazatok);
    let legnepszerubb=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].szavazat==legtobb_szavazat){
            let nepszeru_jelolt={};
            nepszeru_jelolt.nev=vizsgaltTomb[i].nev;
            if (vizsgaltTomb[i].part=="-"){
                nepszeru_jelolt.part="Független";
            }
            else {
            nepszeru_jelolt.part=vizsgaltTomb[i].part;
            }
            legnepszerubb.push(nepszeru_jelolt);
        }
    }
    return legnepszerubb;
}

function legtobb_szavazat_kiir(){
    let legnepszerubb_jelolt=legtobb_szavazat_kivalogato(szavazatok);
    let lista=document.querySelector("#f6");

    for(let i=0;i<legnepszerubb_jelolt.length;i++){
        let elem=document.createElement("li");
            elem.appendChild(document.createTextNode("Képviselő neve: " + legnepszerubb_jelolt[i].nev + " Pártja: " +  legnepszerubb_jelolt[i].part));
            lista.appendChild(elem);
    }

    f6_eventGomb.removeEventListener("click", legtobb_szavazat_kiir);
}

let f6_eventGomb=document.querySelector("#f6gomb");
f6_eventGomb.addEventListener("click", legtobb_szavazat_kiir);
f6_eventGomb.addEventListener("click", eltunteto_f6);

function eltunteto_f6() {
    let f6_elem = document.querySelector("#f6");
    let f6_gomb = document.querySelector("#f6gomb");
    let f6_allapot = f6_elem.style.display;
    if (f6_allapot != "block") {
        f6_elem.style.display = "block";
        f6_gomb.value = "Köszönöm a választ!";
    }
    else {
        f6_elem.style.display = "none";
        f6_gomb.value = "Legnépszerűbb jelölt:";
    }
}

//7. feladat
function korzet_kivalogato(vizsgaltTomb){
    let korzet_lista=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        let szerepele=false;
        let adott_korzet=vizsgaltTomb[i].korzet;
        for(let j=0;j<korzet_lista.length;j++){
            if(adott_korzet==korzet_lista[j]){
                szerepele=true;
            }
        }
        if(szerepele==false){
            korzet_lista.push(adott_korzet);
        }
    }
    korzet_lista.sort(function(a, b){return b-a});
    return korzet_lista;
}

function korzet_max_kereso(vizsgaltTomb, korzetek_lista){
let nyero_indexek=[];
for (let i=0; i<korzetek_lista.length; i++){
 let maxIndex=0;
 for(let j=0;j<vizsgaltTomb.length;j++){
 	if (vizsgaltTomb[j].korzet==korzetek_lista[i] && vizsgaltTomb[j].szavazat>vizsgaltTomb[maxIndex].szavazat){
        	maxIndex=j;
        }
    }
    nyero_indexek.push(maxIndex);
    }
 return nyero_indexek;
 }

 let felugro_ablak2 = document.querySelector("#nyertesek_tabla");
 let feladat_sor2 = document.querySelector("#feladatsor");
 
 function nyertesek_tablazat(){
     felugro_ablak2.style.display = "block";
     feladat_sor2.style.filter = "blur(3px)";
     let korzetek_lista=korzet_kivalogato(szavazatok);
     let nyero_index=korzet_max_kereso(szavazatok, korzet_kivalogato(szavazatok));
     let table2=document.querySelector("#f7");
 
     if (table2.rows.length > 1) {
         table2.deleteRow(table2.rows.length);
     }
     for(let i=0;i<korzetek_lista.length;i++){
         let adat_sor=table2.insertRow(1);
         let korzet_oszlop=adat_sor.insertCell(0);
         let nev_oszlop=adat_sor.insertCell(1);
         let part_oszlop=adat_sor.insertCell(2);
         let szavazat_oszlop=adat_sor.insertCell(3);
         korzet_oszlop.innerHTML=korzetek_lista[i];
         nev_oszlop.innerHTML=szavazatok[nyero_index[i]].nev;
         if (szavazatok[nyero_index[i]].part=="-"){
            part_oszlop.innerHTML="Független";
        }
        else {
            part_oszlop.innerHTML=szavazatok[nyero_index[i]].part;
        }
         szavazat_oszlop.innerHTML=szavazatok[nyero_index[i]].szavazat;
     }
    
 }
 
 let x2gomb = document.querySelector("#x2_gomb");
 x2gomb.addEventListener("click", function () {
     felugro_ablak2.style.display = "none";
     feladat_sor2.style.filter = "blur(0px)";
 })
 
 let f7_eventGomb=document.querySelector("#f7gomb");
 f7_eventGomb.addEventListener("click", nyertesek_tablazat);
 