//Variáveis que contém os números que irão ser usados na operação
let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

//Variável que irá conter a operação a ser feita
let op = prompt(
    'Digite a operação que deseja: ' +
    '\n + -> Adição' +
    '\n - -> Subtração' +
    '\n * -> Multiplicação' +
    '\n / -> Divisão' + 
    '\n = -> Todos'
);

//Constantes que contém as operações
const adicao = parseInt(num1) + parseInt(num2);
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;

//Função que fará as operações
if (op == '+'){
    alert('Operação selecionada: adição!');
    alert(num1 + ' + ' + num2 + ' = ' + adicao)
} else if (op == '-'){
    alert('Operação selecionada: subtração!')
    alert(num1 + ' - ' + num2 + ' = ' + sub)
} else if(op == '*'){
    alert('Operação selecionada: multiplicação!')
    alert(num1 + ' * ' + num2 + ' = ' + mult)
} else if(op == '/'){
    alert('Operação selecionada: divisão!')
    alert(num1 + ' / ' + num2 + ' = ' + div)
} else if (op == '='){
    alert('Operação selecionada: quatro operações!')
    alert(
        'As quatro operações com ' + num1 + ' e ' + num2 + ' são:' +
        '\n Adição = ' + adicao +
        '\n Subtração = ' + sub +
        '\n Multiplicação = ' + mult + 
        '\n Divisão = ' + div 
    )
} else{
    alert('Operação inválida')
}