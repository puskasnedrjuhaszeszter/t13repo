<script>
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

    function csapatok_szama(vizsgaltTomb){
        let szam=0;
        for (let i=0;i<vizsgaltTomb.length;i++){
            szam++;
        }
        return szam;
    }
    document.write("A csapatok száma: "+csapatok_szama(csapatok));
    document.write("<hr>");

    function atlagpontszam(vizsgaltTomb){
        let osszpont=0;
        for (let i=0;i<vizsgaltTomb.length;i++){
            osszpont += vizsgaltTomb[i].pont;
        }
        let atlagpont=osszpont/csapatok_szama(vizsgaltTomb);
        return atlagpont;
    }

    document.write("A csapatok átlagpontja: "+Math.round(atlagpontszam(csapatok)));
    document.write("<hr>");

    function atlagfelettiek(atlagpont, vizsgaltTomb){
        document.write("Az átlag feletti pontot elért csapatok: ");
        document.write("<ul>");
        for(let i=0;i<vizsgaltTomb.length;i++){
            if (vizsgaltTomb[i].pont>atlagpont){
                document.write("<li>" + vizsgaltTomb[i].nev + " csapatának átlag feletti pontszáma: " + vizsgaltTomb[i].pont + "</li>")
            }
        }
        document.write("</ul>");
    }
    atlagfelettiek(atlagpontszam(csapatok), csapatok);
    document.write("<hr>");

    function atlag_felettiek(atlagpont, vizsgaltTomb){
        document.write("<table border>")
        document.write("<h3> Az átlag feletti pontot elért csapatok: </h3>");
        for(let i=0;i<vizsgaltTomb.length;i++){
            document.write("<tr>");
            if (vizsgaltTomb[i].pont>atlagpont){
                document.write("<th>" + vizsgaltTomb[i].nev + "</th><td>" + vizsgaltTomb[i].pont + "</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
    }
    atlag_felettiek(atlagpontszam(csapatok), csapatok);
    document.write("<hr>");

    function legtobbet_javito(vizsgaltTomb){
        let javito=0;
        for (let i=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].valtozas>vizsgaltTomb[javito].valtozas){
                javito = i
            }
        }
        return javito;
    }
    let legtobbet_javito_kereso=legtobbet_javito(csapatok);
    document.write("A legtöbbet javító csapat: "+csapatok[legtobbet_javito_kereso].helyezes+". helyezett "+csapatok[legtobbet_javito_kereso].nev+" pontja: "+csapatok[legtobbet_javito_kereso].pont);
    document.write("<hr>");

    function orszagkereso(orszag, vizsgaltTomb){
        let szerepel=false;
        for(let i=0;i<vizsgaltTomb.length;i++){
            if (vizsgaltTomb[i].nev==orszag){
                szerepel=true;
                document.write("Az országok közt szerepel "+orszag+".");
            }
        }
        if (szerepel==false){
            document.write("Az országok közt nem szerepel "+orszag+".");
        }
    }
                
    orszagkereso("Magyarország", csapatok);
    document.write("<hr>");
    orszagkereso("Spanyolország", csapatok);
    document.write("<hr>");

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
     
    function statisztika_tablazat(valtozas_lista,valtozas_mennyiseg){
        document.write("<h3>A helyezések változásának statisztikája</h3><table border>");
        document.write("<tr><th>Helyezés változása</th><th>Csapatok száma</th></tr>");
        for(let i=0;i<valtozas_lista.length;i++){
            document.write("<tr><th>"+valtozas_lista[i]+"</th><th>"+valtozas_mennyiseg[i]+"</th></tr>");
        }
        document.write("</table>");
    }
    statisztika_tablazat(valtozas_kivalaszto(csapatok),valtozas_megszamolo((csapatok),valtozas_kivalaszto(csapatok)));
</script>