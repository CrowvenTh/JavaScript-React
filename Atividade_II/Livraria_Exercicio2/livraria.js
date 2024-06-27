function Avaliar(){
    const livro = document.getElementById('livro').value;
    const autor = document.getElementById('autor').value;
    const avaliacao = parseFloat(document.getElementById('avaliacao').value);

    if(isNaN(avaliacao)){
        document.getElementById('resultado').innerText = 'Insira valores válidos';
    }else {
        document.getElementById('resultado').innerText = `Livro: ${livro} | Autor: ${autor} | Nota: ${avaliacao}`;
        }
    }
var melhorav = []
for(var i =0; i < melhorav.length; i++){
    if(avaliacao > melhorav){
        melhorav = avaliacao;
        }
    document.getElementById('resultado').innerText = `A melhor avaliacao foi ${melhorav}`;
}

