"use strict";

let btnValidar = document.getElementById("validar");
btnValidar.addEventListener("click", validar)

    let formData = new FormData(formulario);
    let nombre = formData.get('nombre');
    let mail = formData.get('mail');
    let interes1 = formData.get('interes1');
    let interes2 = formData.get('interes2');

console.log(nombre, mail, interes1, interes2)