# Calcolo del prezzo del biglietto del treno

1) Chiedere all'utente la distanza in km da percorrere con un prompt e salvare in un variabile

2) Chiedere all'utente la sua età con un prompt e salvare in un variabile  

3) Creare una variabile prezzo definito in base ai km (0.21 € al km)

4) Calcolo del prezzo del biglietto scontato del 20% per i minorenni e del 40% per gli over 65. 

- SE età < 18 anni {
    prezzoMinorenni = (prezzo - (prezzo * 0.2))
}
- ALTRIMENTI SE età >= 65 anni {
    prezzoOver65 = (prezzo - (prezzo * 0.4))
}

5) Stampo il prezzo finale del biglietto con due cifre decimali.  