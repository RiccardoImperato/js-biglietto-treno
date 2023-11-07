'use strict'

// 1) Chiedere all'utente la distanza in km da percorrere con un prompt e salvare in un variabile

const distanzaKm = Number(prompt('Inserisci la distanza da percorrere in km'));

// 2) Chiedere all'utente la sua età con un prompt e salvare in un variabile

const eta = Number(prompt('Inserisci la tua età'));

// 3) Creare una variabile prezzo definito in base ai km (0.21 € al km)

const prezzoKm = 0.21;

// 4) Calcolo del prezzo del biglietto scontato del 20% per i minorenni e del 40% per gli over 65.

const scontoMinorenni = 20;
const scontoOver65 = 40;


// - SE età < 18 anni {
//     prezzoMinorenni = (prezzo - (prezzo * 0.2))
// }
// - ALTRIMENTI SE età >= 65 anni {
//     prezzoOver65 = (prezzo - (prezzo * 0.4))
// }

// 5) Stampo il prezzo finale del biglietto con due cifre decimali. 

if (!isNaN(distanzaKm) && !isNaN(eta)) {

    let prezzo = prezzoKm * distanzaKm;

    let sconto = 0;


    if (eta < 18) {
        prezzo = prezzo - ((prezzo * scontoMinorenni) / 100);
    }
    
    else if (eta >= 65) {
        prezzo = prezzo - ((prezzo * scontoOver65) / 100);
    }

    prezzo -= sconto;
    console.log('Prezzo biglietto:', prezzo.toFixed(2), '€');
    
} else {
        console.log('Errore, valori non validi');
    }

