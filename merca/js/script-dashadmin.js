//FUNCION DEL RELOJ DEL DASHBOARD

// Función para obtener la hora actual y actualizarla en la página
function actualizarHora() {
    // Obtener la hora actual
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var am_pm = hora >= 12 ? 'PM' : 'AM'; // Determina si es AM o PM

    // Convierte la hora a formato de 12 horas
    hora = hora % 12 || 12;

    // Formatear la hora para mostrar solo horas y minutos
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;

    // Construir la cadena de tiempo (hora:minutos AM/PM)
    var tiempo = hora + ":" + minutos + " " + am_pm;

    // Mostrar la hora en el elemento con id "clock"
    document.getElementById("clock").innerText = tiempo;
}

// Llamar a la función actualizarHora cada segundo
setInterval(actualizarHora, 1000);

