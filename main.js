

let jsString = localStorage.getItem('countdown');
if (jsString == null) {
    //lisää tähän teksti "siirtyy confikseen"
    // 3 sek aikaviive
    location.replace("config.html");
}

//console.log(jsString);
let taulukko = JSON.parse(jsString);
//console.log(taulukko);
let to = new Date(taulukko.vuosi, taulukko.kk-1, taulukko.pva, taulukko.ho, taulukko.mi);

let timer = setInterval(counter, 1000);
document.getElementsByTagName("h1")[0].innerHTML = taulukko.otsikko;

function counter(){
    let from = new Date();
    let diff = duration(to, from);
    //console.log(diff);
    updateDisplay(diff);
    // kun aika on "0" tulostetaan tervehdysviesti
    if (diff.da == 0 && diff.ho == 0 && diff.mi == 00 && diff.se == 00){
        document.getElementsByTagName("h1")[0].innerHTML = taulukko.viesti;
        clearTimeout(timer); 
    }
}


// päivittää näytön
function updateDisplay(diff){
    document.getElementById("day").innerHTML = diff.da;
    document.getElementById("hour").innerHTML = diff.ho;
    document.getElementById("min").innerHTML = diff.mi;
    document.getElementById("sec").innerHTML = diff.se;
}

// palauttaa kahden päivän välisen erotuksen aika oliona
function duration(to, from){
    let sec = Math.floor((to - from)/1000);
    let min = Math.floor(sec/60);
    let hour = Math.floor(min/60);
    let day = Math.floor(hour/24);

    hour = hour - (day * 24);
    min = min-(day*24*60)-(hour*60);
    sec = sec-(day*24*60*60)-(hour*60*60)-(min*60);

    const diff = {
        da: day,
        ho: hour,
        mi: min,
        se: sec
   }
    return diff;
}
