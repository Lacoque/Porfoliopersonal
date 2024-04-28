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

    // Agregar evento de escucha al enviar el formulario
    document.getElementById("request").addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Tu lógica de validación del formulario aquí...
        // Por ejemplo, puedes verificar que todos los campos estén completos antes de enviar el formulario.

        // Si el formulario es válido, cambia el valor del campo formSent a "1"
        document.getElementById("formSent").value = "1";

        // Envía el formulario
        this.submit();
    });
});

