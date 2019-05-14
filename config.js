
//console.log("config.js alkaa")

document.getElementById("config-form").onsubmit = function(event){
    readInputs(event);
    return false;
}

function readInputs(event){
//     var otsikko = document.getElementById("otsikko").value;
  //  console.log("ot - " + otsikko);
    
    let otsikko = event.target.elements['otsikko'].value;
    let aika = event.target.elements['pva'].value;
    let klo = event.target.elements['klo'].value;
    let viesti = event.target.elements['viesti'].value;

    //console.log(otsikko + pva + klo + viesti);
    console.log(event.target.elements);

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

    console.log(taulukko);
    jsString = JSON.stringify(taulukko);
    console.log(jsString);
    localStorage.setItem('countdown',jsString);
}
