document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");

    // Mostrar el mensaje emergente si el formulario se envió correctamente
    const formSentInput = document.getElementById("formSent");
    if (formSentInput && formSentInput.value === "1") {
        modal.style.display = "block"; // Mostrar el mensaje emergente
    }
    

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
