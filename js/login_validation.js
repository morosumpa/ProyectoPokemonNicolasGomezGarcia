"use strict";
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Obtiene los valores almacenados en el almacenamiento local
    let storedUser = localStorage.getItem('signedInUser');
    if (!storedUser) {
        console.log('Usuario no registrado. Por favor, regístrate primero.');
        event.preventDefault();
        return;
    }

    storedUser = JSON.parse(storedUser);
    let storedUsername = storedUser.username;
    let storedPassword = storedUser.password;

    // Obtiene valores de los campos del formulario de inicio de sesión
    let enteredUsername = document.getElementById('loginUsername').value.trim();
    let enteredPassword = document.getElementById('loginPassword').value.trim();

    // Verifica si los valores coinciden
    if (enteredUsername !== storedUsername || enteredPassword !== storedPassword) {
        alert('Usuario o contraseña incorrectos.');
        event.preventDefault();
    } else {
        window.location.href = 'index.html';
    }
});
