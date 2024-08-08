var dobro = document.getElementById('dobro')

function calculandoDobro() {
    var valor = prompt("Digite o valor ");
    if(valor === '') {
        alert('Digite um valor valido');
        dobro.innerHTML = "tente novamente";
    } else {
        dobro.innerHTML = "O dobro de "+ valor +" é igual a "+ (valor * 2);
    }
}