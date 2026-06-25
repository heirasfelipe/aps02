var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var pesoEhValido = true;
    var alturaEhValida = true;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    if (peso <= 0 || peso >= 595) {
        tdPeso.textContent = "Peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    if (altura <= 0 || altura >= 2.72) {
        tdAltura.textContent = "Altura inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");

        //paciente.style.color = "red";   
    }

    var tdImc = paciente.querySelector(".info-imc");

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / Math.pow(altura, 2);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "IMC inválido";
    }
}


//var paciente2 = document.querySelector("#ultimo-paciente");

//var tdPeso = paciente2.querySelector(".info-peso");
//var peso = tdPeso.textContent;

// var tdAltura = paciente2.querySelector(".info-altura");
//var altura = tdAltura.textContent;

//var tdImc = paciente2.querySelector(".info-imc");
//var imc = peso / Math.pow(altura, 2);

//tdImc.textContent = imc.toFixed(2);



