redSet.addEventListener("input", () => { ValueChange("red") });
greenSet.addEventListener("input", () => { ValueChange("green") });
blueSet.addEventListener("input", () => { ValueChange("blue") });

function ValueChange(color) {
    let newValue = document.querySelector("#" + color + "Set").value;
    document.querySelector("#" + color + "Value").innerHTML = newValue;
    let aktSzin = szinKinyero();
    szinKevero(aktSzin);
    szinkodRGB(aktSzin);
    lathatoBetuszin(aktSzin);
    szinkodHEX(aktSzin);
}

function szinKinyero() {
    let r = document.querySelector("#redValue").innerHTML;
    let g = document.querySelector("#greenValue").innerHTML;
    let b = document.querySelector("#blueValue").innerHTML;
    let kinyertSzin = { red: r, green: g, blue: b };
    return kinyertSzin;
}

function szinKevero(szin) {
    let setColor = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
    document.body.style.backgroundColor = setColor;
}

function szinkodRGB(szin) {
    document.querySelector("#RGBkodMegjelenito").innerHTML =
        "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
}

function lathatoBetuszin(szin) {
    if (szin.red > 125 || szin.green > 125 || szin.blue > 125) {
        document.body.style.color = "black";
        document.querySelector("#keveroFelulet").style.borderColor = "black";
        document.querySelector("#keveroFelulet").style.boxShadow = "5px 5px 5px black";
    }
    else {
        document.body.style.color = "white";
        document.querySelector("#keveroFelulet").style.borderColor = "white";
        document.querySelector("#keveroFelulet").style.boxShadow = "5px 5px 5px white";

    }
}

function ertekToHex(szin) {
    var hex = szin.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function szinkodHEX(szin) {
    document.querySelector("#HEXkodMegjelenito").innerHTML =
        "HEX #" + ertekToHex(Number(szin.red)) + " " + ertekToHex(Number(szin.green)) + " " + ertekToHex(Number(szin.blue));
}


