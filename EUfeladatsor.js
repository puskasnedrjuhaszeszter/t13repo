<script>
const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

function tagorszagok_szama(vizsgaltTomb){
    let tagok=0;
    for (let i=0;i<vizsgaltTomb.length;i++){
        tagok++;
    }
    return tagok;
}
document.write("A tagországok száma: "+tagorszagok_szama(EuropaiUnio)+".");
document.write("<hr>");

function csatlakozas_eve(ev, vizsgaltTomb){
        let csatlakozo=0;
        for (let i=0;i<vizsgaltTomb.length;i++){
         let elemek=vizsgaltTomb[i].csatlakozas.split(".");
        	if (elemek[0]==ev){
            csatlakozo++;
            }
        }
        return csatlakozo;
    }
    document.write("A csatlakozó országok száma "+csatlakozas_eve("2007", EuropaiUnio)+" volt 2007-ben.");
    document.write("<hr>");   

function orszagkereso(orszag, vizsgaltTomb){
        let szerepel=false;
        for(let i=1;i<vizsgaltTomb.length;i++){
            if (vizsgaltTomb[i].orszag==orszag){
                szerepel=true;
                document.write("A tagállamok közt szerepel "+orszag+".");
            }
        }
        if (szerepel==false){
            document.write("A tagállamok közt nem szerepel "+orszag+".");
        }
    }
                
orszagkereso("Magyarország", EuropaiUnio);
document.write("<hr>");
orszagkereso("Ukrajna", EuropaiUnio);
document.write("<hr>");


function csatlakozas_honapja(honap, vizsgaltTomb){
		let volte=false;
        for (let i=1;i<vizsgaltTomb.length;i++){
         let reszek=vizsgaltTomb[i].csatlakozas.split(".");
        	if (reszek[2]==honap){
       		volte=true;
            document.write(honap+". hónapban csatlakozott ország az EU-hoz.");
            }
        }
        if (volte==false){
            document.write(honap+". hónapban nem csatlakozott ország az EU-hoz.");
        }
    }
csatlakozas_honapja("05", EuropaiUnio);
document.write("<hr>");
csatlakozas_honapja("11", EuropaiUnio);
document.write("<hr>");

function utoljara_csatlakozo(vizsgaltTomb){
    let utolso=0;
    for (let i=0;i<vizsgaltTomb.length;i++){
        if (vizsgaltTomb[i].csatlakozas>vizsgaltTomb[utolso].csatlakozas){
            utolso=i;
        }
    }
    return utolso;
}
let utoljara_csatlakozo_kereso=utoljara_csatlakozo(EuropaiUnio);
document.write("Az utoljára csatlakozó ország: "+EuropaiUnio[utoljara_csatlakozo_kereso].orszag);
document.write("<hr>");

</script>