function CalcularIMC() {
   
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const alturaMetros = altura / 100;
   
    const imc = peso / (alturaMetros * alturaMetros);

    let classificacao;
    if (sexo, idade, altura, peso === '') {
        alert('Digite um valor válido ');
        calc.innerHTML = "Tente novamente ";
    }
    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc < 24.9) {
        classificacao = "Normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;

    function LimparCampos() {
        document.getElementById("idade").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        const radios = document.querySelectorAll('input[name="sexo"]');
        for (const radio of radios) {
            radio.checked = false;
        }
        document.getElementById("resultado").textContent = "Resultado";
}  
