// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const invitati = [ "Alessio", "Luca", "Davide", "Marco", "Simone"];
const nomeInvitato = prompt("Inserisci il tuo nome:");
let puoPartecipare = false;
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i].toLowerCase() === nomeInvitato.toLowerCase()) {
        puoPartecipare = true;
    }
}
if (puoPartecipare) {
    alert("Benvenuto alla festa!!!");
} else {
    alert("Mi dispiace, non sei nella lista degli invitati.");
}

