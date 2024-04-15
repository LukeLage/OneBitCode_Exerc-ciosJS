//Variáveis que contém os dados sobre o recruta
let nome = prompt('Qual o primeiro nome do recruta? ');
let sobrenome = prompt ('Qual é o sobrenome do recruta? ');
let estudo = prompt('Qual é o campo de estudos do recruta? ');
let nascimento = prompt ('Qual é o ano de nascimento do recruta? ');

//Constante para fazer o cálculo da idade do recruta
const idade = (2024 - nascimento);

//Alerta que dará os dados do recruta
alert('Nome do recruta: ' + nome + ' ' + sobrenome + 
'\n Campo de estudo: ' + estudo +
'\n Idade: ' + idade);