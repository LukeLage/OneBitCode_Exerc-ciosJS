//Variável que irá conter o número à qual será achado os múltiplos
num = parseInt(prompt('Digite um número de 1 a 20 para encontrar seus múltiplos'));

//Função que irá fazer o cálculo
for (var i = 1; i <= 20; i++ ){
    let multi = num * i;
    alert(num + ' x ' + i + ' = ' + multi)
}