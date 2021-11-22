// generare 10 indirizzi email
// 1 creo un ciclo for con i=0 e i < 10
// 2 richiamo la libreria axos
// 3 prelevo l'API con .get
// 4 con la funzione then vado a creare una var che avrà il valore del precorso che gli indico dell'API
// 5 pusho la var nell'array in data   

// e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
// creo un ciclo pre ogni elemento di mails nell'html e stampo gli elementi
// aggiungo la condizione per la quala mi stampa gli elementi sono nel calo la lunghezza dell'array è superiore a 9, in modo che compaiono tutti insieme

var app = new Vue (
        {
            el: "#container",
            data: {
               mails:[
                   
               ],
            },
            mounted() {
                const self = this;
                for(let i=0; i<10 ; i++){
                    axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(function(risultato){
                        console.log(risultato.data.response);
                        let mail = risultato.data.response;
                        self.mails.push(mail)
                    })
                }
            }
        }
    );

