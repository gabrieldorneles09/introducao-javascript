var titulo = document.querySelector(".titulo");

titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var pesoValido = true;
    var alturaValida = true;
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
        pesoValido = validaPeso(peso);
        alturaValida = validaAltura(altura);

    if(!pesoValido){
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        paciente.querySelector(".info-imc").textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3.00){
        return false;
    }
    else{
        return true;
    }
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 500){
        return false;
    }
    else{
        return true;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}