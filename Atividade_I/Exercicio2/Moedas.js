function ConverterMoedas() {
    const insert = parseFloat(document.getElementById('insert').value);

    if (insert === '') {
        alert('Digite um valor válido ');
        calc.innerHTML = "Tente novamente ";
    }

    const dolar = insert * 0.19;
    document.getElementById('dolarResult').innerText = `R$${insert} = $${dolar.toFixed(2)} dólares`;

    const euro = insert * 0.10;
    document.getElementById('euroResult').innerText = `R$${insert} = €${euro.toFixed(2)} Euros`;

    const pesoArgentino = insert * 17.75;
    document.getElementById('pesoArgentinoResult').innerText = `R$${insert} = ${pesoArgentino.toFixed(2)} pesos argentinos`;
}