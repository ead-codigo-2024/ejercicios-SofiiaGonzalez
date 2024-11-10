function validateForm() {
    var name = document.getElementById("name").value;
    var people = document.getElementById("people").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Validación de campos vacíos
    if (name === "" || people === "" || date === "" || time === "") {
        alert("Por favor, rellena todos los campos obligatorios.");
        return false;
    }

    // Validación del número de personas (debe ser un número positivo)
    if (people < 1 || people > 20) {
        alert("El número de personas debe ser entre 1 y 20.");
        return false;
    }

    // Si la validación es exitosa, mostrar mensaje de éxito y ocultar el formulario
    document.getElementById("reservationForm").style.display = "none";
    document.getElementById("successMessage").classList.remove("hidden");

    return false; // Evita que se envíe el formulario
}