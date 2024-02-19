    const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
    ];
//Adatok rendezése
    function rendezo(vizsgaltTomb){
        let csapatok=[];
        for (let i=0;i<vizsgaltTomb.length;i++){
            let objectum={ };
            let elemek=vizsgaltTomb[i].split(";");
            objectum.nev=String(elemek[0]);
            objectum.helyezes=Number(elemek[1]);
            objectum.valtozas=Number(elemek[2]);
            objectum.pont=Number(elemek[3]);
            csapatok.push(objectum);
        }
        return csapatok;
    }
    console.log(rendezo(csapatAdat));

let csapatok=rendezo(csapatAdat);
//táblázat megjelenítése
function tablazat_kiirato(){
    let csapatok=rendezo(csapatAdat);
    let table=document.querySelector("#alap");
    for(let i=0;i<csapatok.length;i++){
        let adatSor=table.insertRow(1);
        let nev_adat=adatSor.insertCell(0);
        let helyezes_adat=adatSor.insertCell(1);
        let valtozas_adat=adatSor.insertCell(2);
        let pont_adat=adatSor.insertCell(3);
        nev_adat.innerHTML=csapatok[i].nev;
        helyezes_adat.innerHTML=csapatok[i].helyezes;
        valtozas_adat.innerHTML=csapatok[i].valtozas;
        pont_adat.innerHTML=csapatok[i].pont;
    }
alap_tablazat_eventGomb.removeEventListener("click", tablazat_kiirato);
}
let alap_tablazat_eventGomb=document.querySelector("#alap_tablazat");
alap_tablazat_eventGomb.addEventListener("click",tablazat_kiirato);

//1. feladat
function csapatok_szama(vizsgaltTomb){
    return vizsgaltTomb.length;
}

function csapatok_szama_kiirato(){
    let csapat_szam=csapatok_szama(csapatok);
    document.querySelector("#csapatok_sz").innerHTML=csapat_szam;
}

let csapatok_szama_eventGomb=document.querySelector("#csapatok_szam");
csapatok_szama_eventGomb.addEventListener("click", csapatok_szama_kiirato);

//2. feladat
function atlagpontszam(vizsgaltTomb){
    let osszpont=0;
    for (let i=0;i<vizsgaltTomb.length;i++){
        osszpont += vizsgaltTomb[i].pont;
    }
    let atlagpont=osszpont/vizsgaltTomb.length;
    return Math.round(atlagpont);
}

function atlagpontszam_kiirato(){
    let apont=atlagpontszam(csapatok);
    document.querySelector("#atlagp").innerHTML=apont;
}

let atlagpont_eventGomb=document.querySelector("#atlagpont");
atlagpont_eventGomb.addEventListener("click", atlagpontszam_kiirato);

//3. feladat
function atlagfelettiek(vizsgaltTomb){
    let atlag_pont=atlagpontszam(csapatok);
    let atlag_felettiek=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        if (vizsgaltTomb[i].pont>atlag_pont){
            atlag_felettiek.push(vizsgaltTomb[i].nev);
        }
    }
    return atlag_felettiek;
}

function atlagfeletti_pontok(vizsgaltTomb){
    let atlag_p=atlagpontszam(csapatok);
    let atlag_felettiPontok=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        if (vizsgaltTomb[i].pont>atlag_p){
            atlag_felettiPontok.push(vizsgaltTomb[i].pont);
        }
    }
    return atlag_felettiPontok;
}

function atlagfelettiek_tablazat_kiirato(){
    let atlagFelettiek=atlagfelettiek(csapatok);
    let tobbletpontok=atlagfeletti_pontok(csapatok);
    let masodik_table=document.querySelector("#atlagf_tabla");
    for(let i=0;i<atlagFelettiek.length;i++){
        let sor=masodik_table.insertRow(1);
        let csapatnev_adat=sor.insertCell(0);
        let csapatpont_adat=sor.insertCell(1);
        csapatnev_adat.innerHTML=atlagFelettiek[i];
        csapatpont_adat.innerHTML=tobbletpontok[i];
    }
    atlag_tablazat_eventGomb.removeEventListener("click", atlagfelettiek_tablazat_kiirato);
}
let atlag_tablazat_eventGomb=document.querySelector("#atlagf");
atlag_tablazat_eventGomb.addEventListener("click",atlagfelettiek_tablazat_kiirato);

//4. feladat
function legtobbetJavito(vizsgaltTomb){
    let javito_indexe=0;
    for (let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].valtozas>vizsgaltTomb[javito_indexe].valtozas){
            javito_indexe = i;
        }
    }
    return javito_indexe;
}

function legtobbetJavitoKiirato(){
    let jobbanJavito=legtobbetJavito(csapatok);
    document.querySelector("#lt_javito").innerHTML= csapatok[jobbanJavito].helyezes + ". helyezett " + csapatok[jobbanJavito].nev + " csapata " + csapatok[jobbanJavito].pont + " ponttal javított a legtöbbet.";
}

let legtobbetjavito_eventGomb=document.querySelector("#legtobbet_javito");
legtobbetjavito_eventGomb.addEventListener("click", legtobbetJavitoKiirato);

//5. feladat
function orszagMegado(){
    let orszag_neve=document.querySelector("#orszagNev").value;
    return orszag_neve;
}

function orszagkereso(vizsgaltTomb, orszagNeve){
    let szerepelE=false;
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].nev==orszagNeve){
            szerepelE=true;
        }
    }
    return szerepelE;
}

function orszagkeresoKiirato(){
    let azOrszag=orszagMegado();
    let ranglistanVoltE=orszagkereso(csapatok,azOrszag);
    if(ranglistanVoltE==true){
        document.querySelector("#aOrszag").innerHTML=`${azOrszag} a FIFA ranglistán szerepel.`;
        console.log(azOrszag);
    }
    else{
        document.querySelector("#aOrszag").innerHTML=`${azOrszag} a FIFA ranglistán sajnos nem szerepel.`;
    }
}

let orszagkereso_eventGomb=document.querySelector("#adottOrszag");
orszagkereso_eventGomb.addEventListener("click",orszagkeresoKiirato);

//6. feladat
function valtozas_kivalaszto(vizsgaltTomb){
    let valtozas_lista=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        let szerepelE=false;
        for(let j=0;j<valtozas_lista.length;j++){
            if(valtozas_lista[j]==vizsgaltTomb[i].valtozas){
                szerepelE=true;
            }
        }
        if(szerepelE==false){
            valtozas_lista.push(vizsgaltTomb[i].valtozas);
         }
     }
    return valtozas_lista;
}
    
function valtozas_megszamolo(vizsgalTomb,valtozas_lista){
    let valtozas_mennyiseg=[];
    for(let i=0;i<valtozas_lista.length;i++){
        valtozas_mennyiseg.push(0);
    }
    for(let i=0;i<vizsgalTomb.length;i++){
        for(let j=0;j<valtozas_lista.length;j++){
            if(valtozas_lista[j]==vizsgalTomb[i].valtozas){
                valtozas_mennyiseg[j]++;
            }
        }
    }
    return valtozas_mennyiseg;
 }

 function statisztika_kiirato(){
    let valtozasok_tipusa=valtozas_kivalaszto(csapatok);
    let valtozasok_szama=valtozas_megszamolo(csapatok,valtozas_kivalaszto(csapatok));
    let harmadik_table=document.querySelector("#stat");
    for(let i=0;i<valtozasok_tipusa.length;i++){
        if (valtozasok_szama[i]>1){
            let adat_sor=harmadik_table.insertRow(1);
            let valtozas_sor=adat_sor.insertCell(0);
            let csapatszam_sor=adat_sor.insertCell(1);
            valtozas_sor.innerHTML=valtozasok_tipusa[i];
            csapatszam_sor.innerHTML=valtozasok_szama[i];
        }
    }
    statisztika_tablazat_eventGomb.removeEventListener("click", statisztika_kiirato);
}
let statisztika_tablazat_eventGomb=document.querySelector("#statisztika");
statisztika_tablazat_eventGomb.addEventListener("click",statisztika_kiirato);


