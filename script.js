document.getElementById('formBusqueda').addEventListener('submit', function (event) {
    event.preventDefault();  // Evitar el comportamiento predeterminado del formulario

    // Obtener la raza ingresada por el usuario
    const raza = document.getElementById('razaInput').value;

    // Construir la URL de la API con la raza proporcionada
    const apiUrl = `https://dog.ceo/api/breed/${raza}/images/random`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verificar si se obtuvo una imagen
            if (data.status === 'success') {
                const imagenPerro = document.getElementById('imagenPerro');
                imagenPerro.src = data.message;  // Establecer la imagen obtenida en el elemento de la imagen
            } else {
                alert('No se encontró una imagen para esa raza de perro.');
            }
        })
        .catch(error => {
            console.error("Error al obtener la imagen del perro:", error);
            alert("Ocurrió un error al obtener la imagen del perro.");
        });
});
