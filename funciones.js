

function Validar() {

    event.preventDefault(); // evita que el en el ingreso del formulario vuelva al index.

    var correo = document.getElementById("correo").value; // toma el valor del correo ingresado en el input
    var contraseña = document.getElementById("contraseña").value; // toma el valor de la contraseña ingresada en el input

    if (correo === "sebas.exe@gmail.com" && contraseña === "moneda") {
        // aplicar funcion para redirigir a tienda
        alert("Redirigiendo");
        window.location.href = "tienda.html";
    }
    else {
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
            message += 'Colin Mcrae Rally 2.0 PS2';
            break;
        case 'producto2':
            message += 'Virtua Tennis 2 Dreamcast';
            break;
        case 'producto3':
            message += 'Crash Team Racing PS1';
            break;
        case 'producto4':
            message += 'Max Payne 2 PS2';
            break;
        case 'producto5':
            message += 'Gran Turismo 2 PS1';
            break;
        case 'producto6':
            message += 'Crazy Taxi Dreamcast';
            break;
    }
    alert(message);
}

function AgregarComentario() {
    var comment = document.getElementById('commentBox').value;

    if (comment.trim() !== "") {
        var commentSection = document.getElementById('comentarios');
        var newComment = document.createElement('p');
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        document.getElementById('commentBox').value = "";
    }
}

