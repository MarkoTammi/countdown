
let testi = localStorage.getItem('countdown');
console.log(testi);

//lomakkeen esitäyttö jos localStoragessa on arvoja
if (localStorage.getItem('countdown')) {
    let jsString = localStorage.getItem('countdown');
    let taulukko = JSON.parse(jsString);
    console.log(taulukko);
    document.getElementById("otsikko").value = taulukko.otsikko;
    document.getElementById("pva").value = taulukko.vuosi + "-" + taulukko.kk + "-" + taulukko.pva;
    document.getElementById("klo").value = taulukko.ho + ":" + taulukko.mi;
    document.getElementById("viesti").value = taulukko.viesti;
}

//tapahtumakäsittelijä "aseta" painonapille
document.getElementById("config-form").onsubmit = function(event){
    readInputs(event);
    return false;
}

// funktio lukee formin ja tallentaa sen json muodossa localStorageen
function readInputs(event){
    //console.log("ot - " + otsikko);
    //console.log(event.target.elements);
    let otsikko = event.target.elements['otsikko'].value;
    let aika = event.target.elements['pva'].value;
    let klo = event.target.elements['klo'].value;
    let viesti = event.target.elements['viesti'].value;

    //console.log(otsikko + pva + klo + viesti);
    //console.log(event.target.elements);

    let vuosi = aika.slice(0, 4);
    let kk = aika.slice(5,7);
    let pva = aika.slice(8,10);
    let ho = klo.slice(0,2);
    let mi = klo.slice(3,5);
    //console.log(vuosi);

    let taulukko = {
        otsikko: otsikko,
        vuosi: vuosi,
        kk: kk,
        pva: pva,
        ho: ho,
        mi: mi,
        viesti: viesti
    };

    //console.log(taulukko);
    jsString = JSON.stringify(taulukko);
    //console.log(jsString);
    localStorage.setItem('countdown',jsString);
    location.replace("index.html");
}
