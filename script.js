
// ESERCIZIO 7: Scrivi una funzione per cambiare il 
// contenuto del tag h1 in qualcos'altro

let titolo = document.getElementsByTagName('h1')[0];

titolo.addEventListener("click", function () {
    titolo.innerHTML = "Simo non mi odiare!";
});


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore
// di background della pagina

let cambiaColoreSfondo = document.querySelector(".cambiaColore");
let body = document.body;

cambiaColoreSfondo.addEventListener("click", function () {
    body.classList.toggle("modNotte");
});

// ESERCIZIO 9: Scrivi una funzione per cambiare
// l'indirizzo presente nel foother in un altro, fittizio

let newIndirizzo = document.querySelector(".indirizzo");

newIndirizzo.addEventListener("click", function () {
    newIndirizzo.innerHTML = "simoilmeglio@skusku.org";
});

// ESERCIZIO 10: Scrivi una funzione per aggiungere una
// classe CSS ad ogni link Amazon della tabella

let aggiungi = document.querySelectorAll(".prodotti");

aggiungi.forEach(function (prodotto) {
    prodotto.addEventListener("mouseover", function () {
        prodotto.style.boxShadow = "0 0 5px 5px lightgreen";
    });
    prodotto.addEventListener("mouseout", function () {
        prodotto.style.boxShadow = "none";
    });
});

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una 
// classe CSS a tutte le immagini della tabella; questa classe deve 
// modificare la visibilità/invisibilità dell'immagine

let visibila = document.querySelectorAll(".image");

visibila.forEach(function (visibile) {
    visibile.addEventListener("mouseover", function () {
        visibile.style.opacity = "0";
    });
    visibile.addEventListener("mouseout", function () {
        visibile.style.opacity = "1";
    });
});

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo
// di ogni prodotto in uno differente, ogni volta che viene invocata

let cambiaColorePrezzo = document.querySelectorAll(".price");
let ismodNotte = false;

function coloreCasuale() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " , " + g + " , " + b + " )";
} 

for (let i = 0; i < cambiaColorePrezzo.length; i++) {
    cambiaColorePrezzo[i].addEventListener("mouseover", function () {
        cambiaColorePrezzo[i].style.color = coloreCasuale();
     });
}
       