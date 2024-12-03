// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore
const num1 = Number(prompt ("Inserisci un numero"));
const num2 = Number(prompt ("Inserisci un numero"));
if (num1 > num2 ){
    alert (num1)
}else if (num2 > num1){
    alert (num2)
}else {
    alert ("I numeri sono uguali")
}