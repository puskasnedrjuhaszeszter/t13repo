<script>
 let aHalmaz=[];
    for(let i=0;i<10;i++){
        aHalmaz.push(Math.round(Math.random() * 100));
		}
document.write(aHalmaz);
document.write("<hr>");

        let bHalmaz=[];
        for(let i=0;i<10;i++){
            bHalmaz.push(Math.round(Math.random() * 100));
		}
document.write(bHalmaz);
document.write("<hr>");
   let BkulA=[];
      for(let i=0;i<bHalmaz.length;i++){
          let vanEgyezes=false;
          for (let j=0;j<aHalmaz.length;j++){
                if (bHalmaz[i]==aHalmaz[j]){
                    vanEgyezes=true;
              	}
              }
           if (vanEgyezes==false){
               let szerepelE=false;
               for (let k=0;k<BkulA.length;k++){
                    if (bHalmaz[i]==BkulA[k]){
                           szerepelE=true;
                      	}
                    }
            	if (szerepelE==false){
                     BkulA.push(bHalmaz[i]);
                     }
              }
          	}
document.write("A B és A halmaz egymástól különböző elemei:<br>");
document.write(BkulA);
</script>