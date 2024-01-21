<script>
function EredmenyKiirato(aOldal){
    function NegyzetKerulet(aOldal){
        let kerulet=aOldal*4;
        return kerulet;
    }
   let negyzet1=NegyzetKerulet(aOldal);
 
    function NegyzetTerulet(aOldal){
        let terulet=aOldal*aOldal;
        return terulet;
    }
      let negyzet2=NegyzetTerulet(aOldal);
      	document.write(negyzet1);
		document.write("<hr>");
		document.write(negyzet2);
   }
EredmenyKiirato(5);
</script>