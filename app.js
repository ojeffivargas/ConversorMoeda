var cotacaoDolar = 4.91;
var cotacaoEuro = 5.25;
var cotacaoIens = 30.90;
var cotacaoArs = 71.30;
var valorConvertido = 0;

// Mensagem de inicio //
var nome = prompt("Olá, bem vindo ao conversor de moedas! Antes de começar, preencha abaixo com seu nome:");


// Declarando uma função para o botão de conversão em dolares //
btnDolar = document.querySelector("#btnDolar");
function conversaoDolar() { // Função do botão "conversãoDolar"
  let valorReal = Number(prompt("Qual valor em Reais você quer converter?"));
  valorConvertido = valorReal * cotacaoDolar;
  valorConvertido = valorConvertido.toFixed(2);
  
  alert(`${nome}, R$${valorReal} é equivalente à $${valorConvertido}`);
}
btnDolar.addEventListener("click", conversaoDolar); // Ao clicar no botão ativa a função "conversaoDolar"
//
//
// Declarando uma função para o botão de conversão em euros //
btnEuro = document.querySelector("#btnEuro");
function conversaoEuro() {
  let valorReal = Number(prompt("Qual valor em Reais você quer converter?"));
  
  valorConvertido = valorReal * cotacaoEuro;
  valorConvertido = valorConvertido.toFixed(2);

  alert(`${nome}, R$${valorReal} é equivalente à €${valorConvertido}`);
}
btnEuro.addEventListener("click", conversaoEuro);
//
//
// Declarando uma função para o botão de conversão em Ienes //
btnIens = document.querySelector("#btnIens");
function conversaoIens() {
  let valorReal = Number(prompt("Qual valor em Reais você quer converter?"));
  
  valorConvertido = valorReal * cotacaoIens;
  valorConvertido = valorConvertido.toFixed(2);
  
  alert(`${nome}, R$${valorReal} é equivalente à ¥${valorConvertido}`);
}  
btnIens.addEventListener("click", conversaoIens);
//
//
// Declarando uma função para o botão de conversão em Pesos Argentinos //

btnArs = document.querySelector("#btnArs");
function conversaoArs() {
  let valorReal = Number(prompt("Qual valor em Reais você quer converter?"));
  
  valorConvertido = valorReal * cotacaoArs;
  valorConvertido = valorConvertido.toFixed(2);
  
  alert(`${nome}, R$${valorReal} é equivalente à $${valorConvertido}`);
}  
btnArs.addEventListener("click", conversaoArs);
