// Countdown tehtävän kysymykset

// tehtävä 1. määrittelet literaalin oliolle ja tulostat sen konsoliin
console.log("Tehtävä 1");
let muuttuja = {
    nimi : {                            //olio
        etunimi : "Marko",
        sukunimi : "Tammivuori"
        },
    ika : 50,
    sukupuoli : "mies",
    harrastukset : ["liikunta","mökki"], //lista
    jasen : true
}
console.log(muuttuja);

// tehtävä 2. Lisää edellisen tehtävän sivulle olion tulostus sivulle JSON-muodossa.
console.log("Tehtävä 2");
let jsonString = JSON.stringify(muuttuja);
console.log(jsonString);

/* Tehtävä 3.
Laadi sivu, joka toteuttaa seuraavat toiminnot ja tulostaa jokaisen toiminnon jälkeen olion konsoliin

luo tyhjä olio
lisää oliolle ominaisuus etunimi ja anna sille arvo Magnus
lisää oliolle ominaisuus sukunimi ja anna sille arvo von Wright
Muuta ominaisuuden etunimi arvoksi Ferdinand
Poista ominaisuus etunimi oliosta. */
console.log("Tehtävä 3");
let olioA = {};
console.log(olioA);
olioA.etunimi = "Magnus";
console.log(olioA);
olioA.sukunimi = "von Wright";
console.log(olioA);
olioA.etunimi = "Ferdinand";
console.log(olioA);
delete olioA.etunimi;
console.log(olioA);

