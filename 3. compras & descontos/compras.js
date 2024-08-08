var resultado;
function calculaDesconto(){
    const vl = parseFloat(document.getElementById('valor').value);

    if(isNaN(vl) || vl < 0 || vl === ''){
        document.getElementById('resultado').innerText = `digite um valor válido`;
    } else if (vl >= 500){
        resultado = vl - (vl * 0.05);
        document.getElementById('resultado').innerText = `Valor total com desconto: R$${resultado}`;
    } else if(vl < 500){
        resultado = vl - (vl * 0.10);
        document.getElementById('resultado').innerText = `Valor total com desconto: R$${resultado}`;
    }
}