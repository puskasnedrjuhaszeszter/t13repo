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

interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}

function ObjektumFeltolto(feltoltendoElem: string[]): FifaAdat[] {
    let beolvasottAdatok: FifaAdat[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(";");
        let ujCsapat: FifaAdat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3]),
        }
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}

const csapatok = ObjektumFeltolto(csapatAdat);

//1. feladat
function csapatSzam(vizsgaltTomb: any[]): number {
    return vizsgaltTomb.length;
}

function csapatSzamKiir(darab: number): void {
    document.write("A csapatok száma: " + darab);
}

csapatSzamKiir(csapatSzam(csapatok));
document.write("<hr>");


//2. feladat
function atlagPontKiszamolo(vizsgaltTomb: any[]): number {
    let osszPont: number = 0;
    for (let i: number=0; i < vizsgaltTomb.length; i++) {
        osszPont += vizsgaltTomb[i].pont;
    }
    return Math.round(osszPont / vizsgaltTomb.length);
}

function atlagPontKiirato(atlag: number): void {
    document.write("A csapatok átlagpontszáma: " + atlag);
}

atlagPontKiirato(atlagPontKiszamolo(csapatok));
document.write("<hr>");

//3. feladat
function atlagFelett(vizsgaltTomb:any[]):string[]{
    let atlagPont:number=atlagPontKiszamolo(csapatok);
    let atlagFelettiCsapatok:string[]=[];
    for (let i:number=0; i < vizsgaltTomb.length; i++){
        if (vizsgaltTomb[i].pont>atlagPont){
            atlagFelettiCsapatok.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFelettiCsapatok;
}
console.log("Átlag feletti csapatok: " +atlagFelett(csapatok));

//4. feladat

function legtobbetJavito(vizsgaltTomb:any[]):number{
    let legjobbCsapat:number=0;
    for (let i:number=0; i < vizsgaltTomb.length; i++){
        if (vizsgaltTomb[i].valtozas>vizsgaltTomb[legjobbCsapat].valtozas){legjobbCsapat=i;
        }
    }
    return legjobbCsapat;
}

function legtobbetJavitoKiir(legjobbIndex):void{
    document.write("A legtöbbet javító csapat neve: "+ csapatok[legjobbIndex].nev);
    document.write("<br>");
    document.write("A legtöbbet javító csapat helyezése: "+csapatok[legjobbIndex].helyezes);
    document.write("<br>");
    document.write("A legtöbbet javító csapat pontváltozésa: "+csapatok[legjobbIndex].valtozas);
    document.write("<br>");
    document.write("A legtöbbet javító csapat pontja: "+csapatok[legjobbIndex].pont);
}

legtobbetJavitoKiir(legtobbetJavito(csapatok));
document.write("<hr>");

//5. feladat

function szerepelEMo(vizsgaltTomb:any[]):boolean{
    for (let i:number=0; i < vizsgaltTomb.length; i++)
{    if (vizsgaltTomb[i].nev=="Magyarország"){
    return true;
}
}
return false;
}

function szerepelEMoKiir(eredmeny:boolean):void{
    if (eredmeny==true){
        document.write("Magyarország szerepe a csapatok között.")
    }
    else{
        document.write("Magyarország miért is szerepelne a csapatok között?");
    }
}

szerepelEMoKiir(szerepelEMo(csapatok));
document.write("<hr>");

//6. feladat
function valtozasok(vizsgaltTomb:any[]):number[]{
    let valtozasok:number[]=[];
    for (let i:number=0; i < vizsgaltTomb.length; i++){
        let szerepelE:boolean=false;
        for (let j:number=0; j<valtozasok.length;j++){
            if (vizsgaltTomb[i].valtozas==valtozasok[j]){
                szerepelE=true;
            }
        }
        if (szerepelE==false){
            valtozasok.push(vizsgaltTomb[i].valtozas);
        }

    }
return valtozasok;
}

function valtozasokMennyisege(vizsgaltTomb:any[], valtozasok:number[]):number[]{
    let valtozasMennyisegek:number[]=[];
    for(let i:number=0;i<valtozasok.length;i++){
    	valtozasMennyisegek.push(0);
    }
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        for(let j:number=0;j<valtozasok.length;j++){
        	if(vizsgaltTomb[i].valtozas==valtozasok[j])
            {
            	valtozasMennyisegek[j]++;
            }
        }
    }
    return valtozasMennyisegek;
}

function valtozasKiir(valtozasok:number[], valtozasMennyisegek:number[]):void {
    document.write("<table border=1><caption>Változások Listája");
	for(let i:number=0;i<valtozasMennyisegek.length;i++){
    	if(valtozasMennyisegek[i]>1){
    		document.write("<tr><th>"+valtozasok[i]+"</th><td>"+valtozasMennyisegek[i]+"</td></tr>");
        }
    }
    document.write("</table>");
}

let valtozasSzurese=valtozasok(csapatok);

valtozasKiir(valtozasSzurese, valtozasokMennyisege(csapatok, valtozasSzurese));