<script>
function SzerkeszthetoHaromszog(aOldal, bOldal, cOldal){
	if(aOldal+bOldal>cOldal && aOldal+cOldal>bOldal && bOldal+cOldal>aOldal){
	return true;
	}
	else{
	return false;
	}
}
document.write(SzerkeszthetoHaromszog(6, 6, 6));
</script>
