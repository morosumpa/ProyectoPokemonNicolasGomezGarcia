"use strict";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Obtiene los valores almacenados en el almacenamiento local
    let storedUser = localStorage.getItem('signedInUser');
    if (!storedUser) {
        alert('Usuario no registrado. Por favor, regístrate primero.');
        event.preventDefault();
        return;
    }

    storedUser = JSON.parse(storedUser);
    let storedUsername = storedUser.username;
    let storedGmail = storedUser.gmail;
    let storedPassword = storedUser.password;

    // Obtiene los valores de los campos del formulario de login.html
    let enteredUsername = document.getElementById('loginUsername').value.trim();
    let enteredPassword = document.getElementById('loginPassword').value.trim();

    // Verifica si los valores coinciden
    if (enteredUsername !== storedUsername || enteredPassword !== storedPassword) {
        alert('Usuario o contraseña incorrectos.');
        event.preventDefault();
    }
    window.location.href = 'index.html';
});
