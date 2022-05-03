// Chiedi all'utente il suo nome
let firstName = prompt("what's your name?");
console.log(firstName);

// Chiedi all'utente il suo cognome
let lastName = prompt("what's your surname");
console.log(lastName);

// Chiedi all'utente il suo colore preferito
let favoriteColor = prompt("what's your favorite color?");
console.log(favoriteColor);

// Assegna all'utente la sua password
document.getElementById('psw').innerText = `${firstName}${lastName}${favoriteColor}21`;