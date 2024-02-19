// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//   Esempio:
//     Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//     Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
//   Variante:
//   Prova ad ordinarli in modo crescente.

// Esercizio 1 

// let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// let finalArrayMin = array.sort((a, b) => a - b);

// console.log(finalArrayMin)

// let finalArrayMax = array.sort((a, b) => a + b);

// console.log(finalArrayMax);

//! - ES2: Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:
//!     - let numbers1 = [10, 20, 30];
//!     - let numbers2 = [40, 50, 60];
//!     - dovra’ restituire come risultato, let newArray = [50, 70, 90]

// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];

// let sum = numbers1.map((a , b) => a + numbers2[b])

//     console.log(sum)


    // ES 3 Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.

    // let numDivisibili = [2, 6, 9, 15, 24, 39, 7, 3];

    // function divisione(numero , divisore) {
        
    //     let arrayFinale = [];

    //     for (let i = 0; i <= numDivisibili.length; i++) {
            
    //         if (numero[i] % divisore == 0) {

    //             arrayFinale.push(numero[i]);
    //         }
                
    //         }

    //         return arrayFinale;

    //     }

    // console.log(divisione(numDivisibili, 3));


// function divisione(numero , divisore){

//     let array = numero.filter((numero) => numero % divisore == 0);

//     return array;

// }

//     console.log(divisione(numDivisibili , 3));



// ES 4  QUI DOVETE POTETE UTILIZZARE I MEDOTI DA RICERCARE Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.
// L'array può contenere numeri o stringhe. Y può essere uno dei due.
// Restituire true se l'array contiene il valore, false in caso contrario.
// check([66, 101], 66) ---> true
// check(['what', 'a', 'great', 'kata'], 'kat') ---> false 
// Ricercare i seguenti METODI DEGLI ARRAY : .join() , .includes() , .concat()

// let items = ["sesso" , "droga" , "rock n' roll"];

// console.log(items.join());

// let items = ["cane", "giraffa" , "delfino"]

// console.log(items.includes("giraffa"));

// let items = ["1" , "2" , "3"]
// let items2 = ["4", "5" , "6"]
// let itemsTot = items.concat(items2);

// console.log(itemsTot)

// ES 4 CON I METODI DA RICERCERCARE : La nostra squadra di calcio ha concluso il campionato. Il risultato di ogni partita ha l'aspetto di "x:y". I risultati di tutte le partite sono registrati nell’array.
// Esempio :
// ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
// Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato
// Regole per il conteggio dei punti per ogni partita
// se x > y: 3 punti
// se x < y: 0 punti
// se x = y: 1 punto
// calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ---> 30
// calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ---> 10
// calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ---> 0
// calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ---> 15

// let risultati = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];


// function punteggio(risultato) {
//     let finalScore = 0;
    
//     for (let i = 0; i < risultato.length; i++) {
//         let game = risultato[i].split(":");

//         if (game[0] > game[1]) {

//             finalScore += 3;
            
//         }else if(game[0] == game[1]){

//             finalScore += 1;
//         }
        
//     }

//     return finalScore;

// }


// console.log(punteggio(risultati));