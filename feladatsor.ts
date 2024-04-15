//1.
function PrimEljaras():void{
	let szam:number=Number(prompt("Add meg a vizsgálandó számot:"));
    let oszto:number=0;
    for(let i=1;i<=szam;i++){
    	if(szam%i==0){
        	oszto++;
        }
    }
    if(oszto==2){
    	document.write("A "+szam+" prím");
    }
    else{
    	document.write("A "+szam+" NEM prím");
    }    
}
PrimEljaras();
document.write(`<hr>`)

//2.
function Koordinata (x:number, y:number):void{
    if(x>0 && y>0){
    	document.write(`A ${x},${y} koorditána az első síknegyedben van.`);
    }
    else if(x<0 && y>0){
    	document.write(`A ${x},${y} koorditána a második síknegyedben van.`);
    }
    else if(x<0 && y<0){
    	document.write(`A ${x},${y} koorditána a harmadik síknegyedben van.`);
    }
    else if(x>0 && y<0){
    	document.write(`A ${x},${y} koorditána a negyedik síknegyedben van.`);
    }
    else if(x==0 && y==0){
    	document.write(`A ${x},${y} koorditána az origóban van.`);
    }
    else if(x==0){
    	document.write(`A ${x},${y} koorditána az y tengelyen van.`);
    }
    else{
    	document.write(`A ${x},${y} koorditána az x tengelyen van.`);
    }
}

Koordinata(-5,3);
document.write(`<hr>`)

//3.
function MelyikANagyobb(szamEgy:number, szamKetto:number, szamHarom:number):number{
    document.write("A "+szamEgy+ " és a "+szamKetto+" valamint a "+szamHarom+" számok közöl ")
	if(szamEgy>=szamKetto && szamEgy>=szamHarom){
    	return szamEgy;
	}
	else if(szamKetto>=szamEgy && szamKetto>=szamHarom)
	{
    	return szamKetto;
	}
	else{
   	 	return szamHarom;
	}
}
document.write("a legnagyobb a " +(MelyikANagyobb(3, 15, 8))+".");
document.write(`<hr>`)

//4.
function SzorgalomSzovegesErtekeles(jegy:number):void{
	if(jegy==2){
     	document.write("A kapott érdemjegy a hanyag."); 
    }
    else if(jegy==3){
     	document.write("A kapott érdemjegy a változó."); 
    }
    else if(jegy==4){
     	document.write("A kapott érdemjegy a jó."); 
    }
    else if(jegy==5){
     	document.write("A kapott érdemjegy a példás."); 
    }
    else{
     	document.write("Hibás adat!"); 
    }
}

SzorgalomSzovegesErtekeles(3);
document.write(`<br>`)
SzorgalomSzovegesErtekeles(5);
document.write(`<hr>`)

//5.
function TizennyolcPlusz(kor:number):boolean{
    document.write("A megadott "+kor);
	if(kor<18){
		return false;
	}
	else{
		return true;
	}
}
document.write(" év 18 év alatti: "+ TizennyolcPlusz(25));
document.write(`<br>`);
document.write(" év 18 év alatti: "+ TizennyolcPlusz(12));
document.write(`<hr>`);

//6.
function LNKO(szamEgy:number, szamKetto:number):number{
	let lnko:number=1;
    document.write("A "+szamEgy+" és a " +szamKetto);
    var i:number
    for(i=2;i<=szamEgy;i++)
    {
    	if(szamEgy%i==0 && szamKetto%i==0){
        	lnko=i;
        }
    }
    return lnko;
}
document.write(" legnagyobb közös osztója "+(LNKO(5,15))+".");
document.write(`<hr>`);

//7.
function SzamtaniSorozatGenerator(elsoElem:number, kulonbseg:number, elemSzam:number):void{
    document.write("Az "+elsoElem+" első elemű, "+kulonbseg+" lépésnagyságú, és "+elemSzam+" elemszámú sorozat a következő: ")
	for(let i=0;i<elemSzam;i++){
    	document.write(elsoElem+",");
        elsoElem+=kulonbseg;
    }
}
(SzamtaniSorozatGenerator(4, 3, 10));
document.write("<hr>");

//8.
function PrimFuggveny(vizsgaltSzam:number):boolean{
    document.write("A megadott "+vizsgaltSzam);
    let oszto:number=0;
    for(let i=1;i<=vizsgaltSzam;i++){
    	if(vizsgaltSzam%i==0){
        	oszto++;
        }
    }
    if(oszto==2){
    	return true;
    }
    else{
    	return false;
    }    
}

document.write(" szám valóban prím: " +PrimFuggveny(21));
document.write("<br>");
document.write(" szám valóban prím: " +PrimFuggveny(11));
document.write("<hr>");

//9.
function ParosGenerator(alsoHatar:number, felsoHatar:number):number{
    document.write("A "+alsoHatar+" alsó határ, és "+felsoHatar+" felső határ közötti páros szám:")
	let generaltSzam:number=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
	if(generaltSzam%2==0){
		return generaltSzam;
	}
	else if(generaltSzam!=felsoHatar){
		return generaltSzam+1;
	}
	else{
		return generaltSzam-1;
	}
}
document.write(" "+ParosGenerator(10,20));
document.write(`<br>`);
document.write(" "+ParosGenerator(1,100));
document.write("<hr>");

//10.
function KettoHatvanyai(elemSzam:number):void{
    document.write("A kettő hatványai "+elemSzam+"-ig: ")
	for(let i=0;i<elemSzam;i++){
    	document.write(2**i+",");
    }
}
KettoHatvanyai(5);
document.write("<hr>");

//11.
function SzerkeszhetoHaromszog(aOldal:number,bOldal:number,cOldal:number):boolean{
    document.write("A "+aOldal+" és "+bOldal+" valamint "+cOldal+" méretű háromszög szerkeszthető:")
	if(aOldal+bOldal>cOldal && aOldal+cOldal>bOldal && cOldal+bOldal>aOldal){
    	return true;
    }
    else{
    	return false;
    }
}
document.write(" "+SzerkeszhetoHaromszog(4,5,6));
document.write("<hr>");

//12.
function NegyzetKerulet(aOldal:number):number{
	return aOldal*4;
}

function NegyzetTerulet(aOldal:number):number{
	return aOldal*aOldal;
}

function EredmenyKiirato(oldalMeret:number){
    document.write(`A ${oldalMeret} egység oldalú négyzet kerülete: ${NegyzetKerulet(oldalMeret)}`);
	document.write(`<br>A ${oldalMeret} egység oldalú négyzet területe: ${NegyzetTerulet(oldalMeret)}`);
}
document.write("<br>");
EredmenyKiirato(3);
document.write("<br>");
EredmenyKiirato(5);
document.write("<br>");
EredmenyKiirato(9);