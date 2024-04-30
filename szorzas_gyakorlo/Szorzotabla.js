<script>
    let a=Number(Math.round(Math.random()*9))+1;
    let b=Number(Math.round(Math.random()*9))+1;
    let d = new Date().getSeconds();
    let valasz= Number(prompt(`Mennyi ${a} szor ${b}?`));
    let most = new Date().getSeconds();
    let gyorsasag=(most-d);
    if (gyorsasag<8){
        document.write(`Gyors voltál!<br>`);
    }
    else {
        document.write(`Lehetne ezt gyorsabban is!<br>`);
	}
    let szorzat=a*b;
    if (szorzat==valasz){
        document.write(`HELYES VÁLASZ!<br>Az ${a} és ${b} szorzata valóban ${szorzat}.`);
    }
    else {
        document.write(`Az ${a} és ${b} szorzata <b>${szorzat}</b>, nem pedig ${valasz}.<br> KÉRLEK GYAKOROLJ MÉG!`);
    }
</script>