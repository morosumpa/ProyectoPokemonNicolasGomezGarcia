"use strict";
document.getElementById('signinForm').addEventListener('submit', function (event) {
    // Obtiene valores de los campos
    let username = document.getElementById('username').value.trim();
    let gmail = document.getElementById('gmail').value.trim();
    let password = document.getElementById('password').value.trim();

    // Verifica que los campos no estén vacíos
    if (username === '' || gmail === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Detener el envío del formulario
        return;
    }

    // Verifica que el correo electrónico tenga la estructura de un correo de Gmail
    if (!isValidGmail(gmail)) {
        alert('Por favor, introduce una dirección de correo electrónico de Gmail válida.');
        event.preventDefault(); // Detiene el envío del formulario
        return;
    }

    // Verifica que la contraseña tenga al menos 8 caracteres y sea segura
    if (!isValidPassword(password)) {
        alert('La contraseña debe tener al menos 8 caracteres y contener letras mayúsculas, minúsculas, números y caracteres especiales.');
        event.preventDefault(); // Detiene el envío del formulario
        return;
    }

    // Almacena datos en el almacenamiento local
    let userObject = {
        username: username,
        gmail: gmail,
        password: password
    };

    localStorage.setItem('signedInUser', JSON.stringify(userObject));
    window.location.href = 'login.html';
});

// Función para verificar la seguridad de la contraseña
function isValidPassword(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Función para verificar la estructura de un correo de Gmail
function isValidGmail(gmail) {
    let gmailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
    return gmailRegex.test(gmail);
}
