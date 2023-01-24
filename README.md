# Compito React

## Scopo della prova

Lo scopo della prova è attestare delle conoscenze minime del framework React
con una serie di esercizi guidati.

Per installare le librerie necessarie:
### `npm install`

Per far partire il progetto:

### `npm start`

##Es 1. - Griglia dei dati

Creare un componente PeopleList che ritorna una griglia, detta Griglia dei Dati, in righe e colonne, 
in cui ogni riga rappresenta uno dei personaggi in /data/People.ts e le colonne, 
di uguali dimensioni, riportano i valori associati ai campi

"name", "height", "mass", "gender"

Includere il Componente in App.tsx.

commit con messaggio Es_1

##Es 2. Griglia delle statistiche

Aggiungere sopra la griglia creata una ulteriore griglia di due righe per 3 colonne.
La prima riga conterrà le seguenti diciture.

|      Male      |     Female      |       N/A       |

La seconda riga conterrà, per ogni colonna, l'esatto numero di personaggi con gender "male", "female", "n/a".

commit con messaggio Es_2

##Es 3

Aggiungere a ogni riga dela griglia dei dati una quinta colonna con un bottone, associato a ogni personaggio.

Aggiungere alla griglia delle statistiche una terza riga. 
In ogni colonna deve essere visibile un contatore del numero di click sui bottoni della griglia dei dati, in base al valore di "gender" del personaggio associato al bottone.

Es. Se clicco sul bottone associato a Luke Skywalker, che ha gender "male", il contatore della colonna "male" deve aumentare di 1.

commit con messaggio Es_3

##Es 4

Creare un effetto per cui, ogni volta che il valore del contatore di "female" è pari e non nullo, aggiunge 1 al contatore di "male"

commit con messaggio Es_4

##Es 5

Creare un effetto per cui, ogni volta che il valore del contatore di "female" è dispari, raddoppia il contatore di "n/a"

commit con messaggio Es_5

## Documentazione React

To learn React, check out the [React documentation](https://reactjs.org/).
