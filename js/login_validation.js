document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Obtiene los valores de los campos
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    // Verifica que los campos no estén vacíos
    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Detiene el envío del formulario
    } 

});
