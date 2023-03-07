// Chiediamo il nome
let userName = prompt("Inserisci il tuo nome");
console.log(userName);

// Chiediamo il cognome
let userSurname = prompt("Inserisci il tuo cognome");
console.log(userSurname);

// Chiediamo il colore
let userColor = prompt("Inserisci il tuo colore preferito");
console.log(userColor);

//Generiamo la password
let userPassword = `${userName}${userSurname}${userColor}` + 21;
console.log(userPassword);

// Stampiamo la password
document.getElementById("password").innerHTML = `Ciao ${userName}, la tua sicurissima password è: ${userPassword}`;