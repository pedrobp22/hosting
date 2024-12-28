// 1. Intercambio de imágenes al hacer clic sobre ellas
document.getElementById('imagen').addEventListener('click', function() {
    var imagen = document.getElementById('imagen');
    if (imagen.src.includes('imagen1.jpg')) {
        imagen.src = 'images/imagen2.jpg';  // Cambia la ruta según tus imágenes
    } else {
        imagen.src = 'images/imagen1.jpg';  // Cambia la ruta según tus imágenes
    }
});

// 2. Cambio de texto al introducirlo en un campo de texto
document.getElementById('inputTexto').addEventListener('input', function() {
    var texto = document.getElementById('inputTexto').value;
    document.getElementById('textoCambiar').textContent = texto;  // Cambia el texto de este párrafo
});

// 3. Objeto en movimiento
document.getElementById('objeto').addEventListener('click', function() {
    var objeto = document.getElementById('objeto');
    objeto.style.left = (parseInt(objeto.style.left || 0) + 100) + 'px';  // Mueve el objeto 100px a la derecha
});
