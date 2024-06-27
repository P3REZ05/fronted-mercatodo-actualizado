// boton.js

$(document).ready(function() {
    // Función para validar el formulario de proveedor
    function validarFormularioProveedor() {
        var formularioValido = true;

        // Validar tipo de proveedor
        if ($('#tipoProveedor').val() === '') {
            $('#tipoProveedor').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#tipoProveedor').removeClass('is-invalid');
            // Ocultar/mostrar campo de nombre de empresa según el tipo de proveedor seleccionado
            if ($('#tipoProveedor').val() === 'Juridico') {
                $('#nombreEmpresa').parent().show();
                // Validar nombre de empresa solo si es tipo Juridico
                if ($('#nombreEmpresa').val() === '') {
                    $('#nombreEmpresa').addClass('is-invalid');
                    formularioValido = false;
                } else {
                    $('#nombreEmpresa').removeClass('is-invalid');
                }
            } else {
                $('#nombreEmpresa').parent().hide();
                $('#nombreEmpresa').removeClass('is-invalid');
            }
        }

        // Validar representante legal
        var representanteLegal = $('#representanteLegal').val();
        if (representanteLegal === '' || !/^[a-zA-Z\s]+$/.test(representanteLegal)) {
            $('#representanteLegal').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#representanteLegal').removeClass('is-invalid');
        }

        // Validar teléfono
        var telefono = $('#telefono').val();
        if (telefono === '' || !/^\d{10}$/.test(telefono)) {
            $('#telefono').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#telefono').removeClass('is-invalid');
        }

        // Validar correo
        var correo = $('#correo').val();
        if (correo === '' || !/\S+@\S+\.\S+/.test(correo)) {
            $('#correo').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#correo').removeClass('is-invalid');
        }

        // Validar dirección
        if ($('#direccion').val() === '') {
            $('#direccion').addClass('is-invalid');
            formularioValido = false;
        } else {
            $('#direccion').removeClass('is-invalid');
        }

        return formularioValido;
    }

    // Cuando se haga clic en el botón "Guardar cambios"
    $('#guardarCambiosBtn').click(function() {
        // Validar el formulario de proveedor
        if (validarFormularioProveedor()) {
            // Cerrar la modal solo si el formulario es válido
            $('#exampleModal').modal('hide');
        }
    });

    // Ocultar/mostrar campo de nombre de empresa según el tipo de proveedor seleccionado al cargar la página
    if ($('#tipoProveedor').val() !== 'Juridico') {
        $('#nombreEmpresa').parent().hide();
    }

    // Mostrar u ocultar campo de nombre de empresa al cambiar la opción de tipo de proveedor
    $('#tipoProveedor').change(function() {
        if ($(this).val() === 'Juridico') {
            $('#nombreEmpresa').parent().show();
        } else {
            $('#nombreEmpresa').parent().hide();
            $('#nombreEmpresa').removeClass('is-invalid');
        }
    });

    // Función para cerrar la modal al validar campos y hacer clic en "Guardar cambios"
    function cerrarModal() {
        if (validarFormularioProveedor()) {
            $('#exampleModal').modal('hide');
        }
    }

    // Agregar evento al botón "Guardar cambios" para cerrar la modal si los campos son válidos
    $('#guardarCambiosBtn').click(cerrarModal);
});

function generarID() {
    const randomNumber = Math.floor(100 + Math.random() * 900); // Generar un número aleatorio de tres dígitos
    return 'PROV' + randomNumber; // Concatenar 'CAT' con el número aleatorio
}

// Generar el ID de la categoría al cargar la página
const idNumero = document.getElementById('idNumero');
idNumero.textContent = generarID();
