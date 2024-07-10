

function Validar(){

    event.preventDefault(); // evita que el en el ingreso del formulario vuelva al index.

    var correo = document.getElementById("correo").value; // toma el valor del correo ingresado en el input
    var contraseña = document.getElementById("contraseña").value ; // toma el valor de la contraseña ingresada en el input

    if (correo === "sebas.exe@gmail.com" && contraseña === "moneda") {  
        // aplicar funcion para redirigir a tienda
        alert("Redirigiendo");
window.location.href="tienda.html";
    }
    else{
        alert("Contraseña o correo incorrectos, intentelo de nuevo");
      
       }
}
let carrito=[];
contador=0;

function agregarcarrito(idproducto){
    
    let producto = document.querySelector(`div[idproducto='${idproducto}']`);

    if (producto) {
        
        let nombre=producto.getAttribute("name");
        let precio=parseFloat(producto.getAttribute("precio"));
    }
}
