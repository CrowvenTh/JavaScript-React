function SomarNumeros(n1, n2) {
    return n1 + n2;
}

function MostrarResultado() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);

    if (!isNaN(n1) && !isNaN(n2)) {
        const resultado = SomarNumeros(n1, n2);
        document.getElementById('resultado').innerText = `A soma de ${n1} + ${n2} é igual a ${resultado}.`;
    } else {
        document.getElementById('resultado').innerText = `Valor inválido! Tente novamente.`;
    }

}