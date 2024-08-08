// Obtém os valores dos números inseridos pelo usuário
var resultado;
function desconto() {
    const vl = parseFloat(document.getElementById('valor').value);

    if (isNaN(vl)) {
        document.getElementById('resultado').innerText = `Digite um valor Valido`;
    }
    else if (vl >= 500) {
        resultado = vl - (vl * 0.05);
        document.getElementById('resultado').innerText = `O valor com desconto foi: ${resultado}`;
    }
    else if (vl < 500) {
        resultado = vl - (vl * 0.1);
        document.getElementById('resultado').innerText = `O valor com desconto foi: ${resultado}`;
    }
}