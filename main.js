'use strict'

// 1) Chiedere all'utente la distanza in km da percorrere con un prompt e salvare in un variabile

const distanzaKm = prompt('Inserisci la distanza da percorrere in km')

// 2) Chiedere all'utente la sua età con un prompt e salvare in un variabile

const eta = prompt('Inserisci la tua età')

// 3) Creare una variabile prezzo definito in base ai km (0.21 € al km)

const prezzo = (distanzaKm * 0.21)


// 4) Calcolo del prezzo del biglietto scontato del 20% per i minorenni e del 40% per gli over 65.

// - SE età < 18 anni {
//     prezzoMinorenni = (prezzo - (prezzo * 0.2))
// }
// - ALTRIMENTI SE età >= 65 anni {
//     prezzoOver65 = (prezzo - (prezzo * 0.4))
// }

// 5) Stampo il prezzo finale del biglietto con due cifre decimali. 

if (eta < 18) {
    const prezzoUnder = (prezzo - (prezzo * 0.2))
    console.log('Prezzo :' + ' ' + prezzoUnder.toFixed(2) + ' ' + '€')
}

else if (eta >= 65) {
    const prezzoOver = (prezzo - (prezzo * 0.4))
    console.log('Prezzo :' + ' ' + prezzoOver.toFixed(2) + ' ' + '€')
}

else {
    console.log('Prezzo :' + ' ' + prezzo.toFixed(2) + ' ' + '€')
}

