<script>
    let a=Number(prompt ("Add meg az a értékét:"));
    let b=Number(prompt ("Add meg a b értékét:"));
    let c=Number(prompt ("Add meg a c értékét:"));
    if (a==0){
        document.write(`A ${a}, ${b}, ${c} érték esetén nem másdofokú az egyenlet.`);}
    else {
        let d=(b*b)-(4*a*c);
    if (d<0){
        document.write(`A ${a}, ${b}, ${c} érték esetén nincs megoldás.`);}
    else if (d==0){
        document.write(`A ${a}, ${b}, ${c} érték esetén egy megoldás van.`);
    let x=-b/(2*a);
    document.write (`A ${a}, ${b}, ${c} érték esetén a megoldás ${x}.`);}
    else {document.write(`A ${a}, ${b}, ${c} érték esetén két megoldás van.`);
    let x1=(-b+Math.sqrt(d)/(2*a));
    let x2=(-b-Math.sqrt(d)/(2*a));
    document.write (`A ${a}, ${b}, ${c} érték esetén az első megoldás ${x1}.`);
    document.write (`A ${a}, ${b}, ${c} érték esetén a második megoldás ${x2}.`);}
}
</script>