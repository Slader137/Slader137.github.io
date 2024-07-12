function Validar(event) {
    event.preventDefault(); // evita que el formulario vuelva al index.

    var correo = document.getElementById("correo").value; // toma el valor del correo ingresado en el input
    var contraseña = document.getElementById("contraseña").value; // toma el valor de la contraseña ingresada en el input

    if (correo === "sebas.exe@gmail.com" && contraseña === "moneda") {
        alert("Redirigiendo");
        window.location.href = "tienda.html";
    } else {
        alert("Contraseña o correo incorrectos, intentelo de nuevo");
    }
}

function SubirFormulario() {
    var name = document.getElementById('nombre').value;
    var address = document.getElementById('direccion').value;
    var product = document.getElementById('producto').value;
    var quantity = document.getElementById('cantidad').value;

    var message = 'Compraste ' + quantity + ' unidades de ';

    switch (product) {
        case 'producto1':
            message += 'Bajo Eléctrico';
            break;
        case 'producto2':
            message += 'Guitarra';
            break;
        case 'producto3':
            message += 'Batería Acústica';
            break;
        case 'producto4':
            message += 'Micrófono';
            break;
        case 'producto5':
            message += 'Amplificador';
            break;
        case 'producto6':
            message += 'Flauta Dulce';
            break;
        default:
            message += 'Producto desconocido';
    }
    alert(message);
}


function agregarComentario() {
    let comentario = document.getElementById("cajadecomentarios").value;
    if (comentario.trim() !== "") {
        let newp = document.createElement("p");
        newp.textContent = comentario;
        let padre = document.getElementById("comentarios");
        padre.appendChild(newp);
        document.getElementById("cajadecomentarios").value = ""; 
    } else {
        alert("Por favor, escribe un comentario.");
    }
}

function eliminarComentario() {
    let padre = document.getElementById("comentarios");
    if (padre.children.length > 0) {
        padre.removeChild(padre.lastChild);
    } else {
        alert("No hay comentarios para eliminar.");
    }
}