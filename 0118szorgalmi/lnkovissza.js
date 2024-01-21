<script>
let a=Math.round(Math.random()*1000);
let b=Math.round(Math.random()*1000);
let kisebb=a;
	if (b<a){
		kisebb = b;
	}
	if (a%kisebb==0 && b%kisebb==0){
		document.write(`Az ${a} és ${b} számok legnagyobb közös osztója az ${kisebb}.`);
 	}
	else {
		let lnko=kisebb;
		for(let i=kisebb;(i>=1 && lnko==kisebb);i--){
			if(a%i==0 && b%i==0){
				lnko = i;
			}
 	 	}
	document.write(`Az ${a} és ${b} számok legnagyobb közös osztója az ${lnko}.<br>`);
  	}

function LNKOvissza(a,b){
	let kisebb=a;
	if (b<a){
		kisebb = b;
	}
	if (a%kisebb==0 && b%kisebb==0){
	return kisebb;
 	}
	else {
		let lnko=kisebb;
		for(let i=kisebb;(i>=1 && lnko==kisebb);i--){
			if(a%i==0 && b%i==0){
				lnko = i;
			}
 		 }
		return lnko;
 	 }
}
document.write(LNKOvissza(6,9));
</script>
