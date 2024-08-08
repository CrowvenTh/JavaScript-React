let multas = [];

function AdicionarMulta() {
    const pontuacao = parseFloat(document.getElementById('multa').value);
    multas.push(pontuacao);
    MostrarResultado();
}

function MostrarResultado() {
    const dividaTotal = multas.reduce((total, pontuacao) => {
        if (pontuacao <= 2) {
            return total + 125;
        } else if (pontuacao <= 5) {
            return total + 205;
        } else {
            return total + 450;
        }
    }, 0);

const multaMaisCara = Math.max(...multas.map(pontuacao =>{
    if(pontuacao <= 2){
        return 125;
    } else if(pontuacao <= 5){
        return 205;
    } else {
        return 450;
    }
}));

const listarMultas = multas.map((pontuacao, index) => {
    if(pontuacao <= 2){
        return `Multa ${index + 1}: Leve - R$125,00`;
    } else if(pontuacao <= 5){
        return `Multa ${index + 1}: Grave - R$205,00`;
    } else {
        return `Multa ${index +1}: Gravíssisma - R$405,00`
    }
}).join('<br>');

const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `
<p>a) Divida total do condutor: R$${dividaTotal.toFixed(2)}</p>
<p>b) Multa mais cara: R$${multaMaisCara.toFixed(2)}</p>
<p>c) Lista de multas recebidas: <br>${listarMultas}</p>
`;
}