let itens = []


function AdicionarItens(){
    const cod = parseFloat(document.getElementById('item').value);
    itens.push(cod);
    mostrarResultado()
}
function mostrarResultado(){
    const PedidoTotal = itens.reduce((total, cod) => {
        if(cod == 1){
            return total + 4.99;
        }else if(cod == 2){
            return total + 1.50;
        }else if(cod == 3){
            return total + 6.90;
        }else if(cod == 4){
            return total + 9.80;
        }else if(cod == 5){
            return total + 12.50;
        }else if(cod == 6){
            return total + 18.80;
        }else if(cod == 7){
            return total + 13.90;
        }else{
            return 'Valor nulo';
        }
    }, 0);


    const contarPedidos = itens.length;


    const DescPedidos = itens.map((cod, value)=> {
        if(cod == 1){
            return `Suco`;
        }else if(cod == 2){
            return `Água`;
        }else if(cod == 3){
            return `Refrigerante`;
        }else if(cod == 4){
            return `Espetinho`;
        }else if(cod == 5){
            return `Marmita`;
        }else if(cod == 6){
            return `Jantar`;
        }else if(cod == 7){
            return `Sobremesa`;
        }else{
            return 'Valor nulo';
        }
    }).join('<br>');
   
        const resultadoNpedido = document.getElementById('qtdPedidos');
        resultadoNpedido.innerHTML = `
        ${contarPedidos}`


        const resultadoDescPedido = document.getElementById('desc');
        resultadoDescPedido.innerHTML = `${DescPedidos}`;


        const resultadoTotal = document.getElementById('somaTotal');
        resultadoTotal.innerHTML = `R$${PedidoTotal.toFixed(2)}`;
      }