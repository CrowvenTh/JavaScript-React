var nome = prompt('digite o nome');
var sobrenome = prompt('digite o sobrenome');
// atividade Faça um programa que receba como dado de entrada no nome digitado
//o nome sendo = chaves imprima a foto do chaver se não imprima uma imagem de erro
//console.log("Bem vindo " + nome + " sobrenome " + sobrenome);
document.write("Bem vindo " + nome + " sobrenome " + sobrenome);

if (nome === 'Chaves') {
    document.write("<img src='https://s2.glbimg.com/irnBXwz9FeCgi3t5kGWyS0SkAkU=/0x0:345x556/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/M/b/MdWAbJSmyfB4JZBBspkg/chaves.png'/>")
} else {
    document.write("<img src='https://www.artiestick.com/toons/alphabet/ralph/arg-o-5O-tRr-a-pl0ase-ns.gif'/>")
}
