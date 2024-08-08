var calc = document.getElementById('calc');

function dobro() {
    var valor = prompt("Digite o valor ");
    if (valor === '') {
        alert('Digite um valor valido ');
        calc.innerHTML = "tente novamente ";
    } else {
        calc.innerHTML = "O dobro do valor digitado foi " + (valor * 2);
    }
}