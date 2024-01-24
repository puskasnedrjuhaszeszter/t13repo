<script>
    function RnSzam(also,felso){
	if(also<felso){
    	var alsoHatar=also;
        var felsoHatar=felso;
    }
    else{
    	var alsoHatar=felso;
        var felsoHatar=also;
    }
    let randomSzam= Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
    return randomSzam;
    }

    function RandomTombGenerator(meret, alsoHatar,felsoHatar){
        let generaltTomb=[];
            for(let i=0;i<meret;i++){
                let generaltSzam=RnSzam(alsoHatar,felsoHatar);
                generaltTomb.push(generaltSzam);
            }
            return generaltTomb;
    }
    let szamok=RandomTombGenerator(10,20,100);
    document.write(szamok);

    document.write("<hr>");

    function kivalogatas_eljaras(tomb,oszto){
        document.write(`A tömbben az alábbi elemek oszthatóak a ${oszto} számmal: `);
        for(let i=0;i<tomb.length;i++){
	        if(tomb[i]%oszto==0){
                document.write(tomb[i] + ",");
            }
	    }
    }
    kivalogatas_eljaras(szamok,3);
        
    document.write("<hr>");

    function kivalogatas_fuggveny(tomb,oszto){
        document.write(`A tömbben az alábbi elemek oszthatóak a ${oszto} számmal:`);
        let kivalogatas=[];
        for(let i=0;i<tomb.length;i++){
	        if(tomb[i]%(oszto)==0){
                kivalogatas.push(tomb[i]);
            }
	    }
        return kivalogatas;
	}
    document.write(kivalogatas_fuggveny(szamok,4));

    document.write("<hr>");

    function megszamlalo_eljaras(tomb, oszto){
        let parosDb=0;
        for(let i=0;i<tomb.length;i++){
	        if(tomb[i]%oszto==0){
                parosDb++;
            }
        }
        document.write(`A tömbben ${parosDb} elem osztható a ${oszto} számmal. `);
    }
    megszamlalo_eljaras(szamok,5);

    document.write("<hr>");

    function megszamlalo_fuggveny(tomb, oszto){
        document.write(`A tömbben a ${oszto} számmal osztható elemek száma:`);
        let parosDb=0;
        for(let i=0;i<tomb.length;i++){
	        if(tomb[i]%oszto==0){
                parosDb++;
            }
        }
        return parosDb++;
    
    }
    document.write(megszamlalo_fuggveny(szamok, 6));

</script>
