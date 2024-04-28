// Agrega este código JavaScript para mostrar el mensaje emergente
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");

    // Mostrar el mensaje emergente al enviar el formulario
    document.getElementById("request").addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
        modal.style.display = "block"; // Mostrar el mensaje emergente
    });

    // Cerrar el mensaje emergente al hacer clic en el botón de cierre
    closeButton.addEventListener("click", function () {
        modal.style.display = "none"; // Ocultar el mensaje emergente al hacer clic en el botón de cierre
    });

    // Cerrar el mensaje emergente al hacer clic fuera de él
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Ocultar el mensaje emergente al hacer clic fuera de él
        }
    });
});
