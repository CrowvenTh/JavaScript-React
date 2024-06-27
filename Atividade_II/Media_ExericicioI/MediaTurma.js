let medias = [];

function CalcularNota() {
    let resultado;

    const nomeElement = document.getElementById('nome');
    const n1Element = document.getElementById('n1');
    const n2Element = document.getElementById('n2');
    const nome = nomeElement.value;
    const n1 = parseFloat(n1Element.value);
    const n2 = parseFloat(n2Element.value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos para as notas.';
    } else {
       
        resultado = (n1 + n2) / 2;
        medias.push(resultado);

        let somaDasMedias = medias.reduce((acumulador, atual) => acumulador + atual, 0);
        let mediaDaTurma = somaDasMedias / medias.length;

        let p = document.createElement('p');
        p.innerText = nome + ' | Média: ' + resultado.toFixed(2);
        document.getElementById('resultados').appendChild(p);
        document.getElementById('mediaTurma').innerText = 'Média da Turma: ' + mediaDaTurma.toFixed(2);
    }
    nomeElement.value = '';
    n1Element.value = '';
    n2Element.value = '';
}

