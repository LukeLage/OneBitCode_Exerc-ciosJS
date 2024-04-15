//Variáveis do carro 1
let nome1 = prompt('Digite o nome do primeiro carro: ')
let velocidade1 = prompt('Digite a velocidade do primeiro carro: ')

//Variáveis do carro 2
let nome2 = prompt('Digite o nome do segundo carro: ')
let velocidade2 = prompt('Digite a velocidade do segundo carro: ')

if (velocidade1 > velocidade2){
    alert(
        'O carro ' + nome1 + ' é mais rápido que o carro ' + nome2 +
        '\nVelocidade do carro ' + nome1 + ' é de: ' + velocidade1 + ' contra ' + velocidade2 + ' do carro ' + nome2
        )
} else if (velocidade2 > velocidade1){
    alert(
        'O carro ' + nome2 + ' é mais rápido que o carro' + nome1 +
        '\n Velocidade do carro ' + nome2 + ' é de: ' + velocidade2 + ' contra ' + velocidade1 + ' do carro ' + nome1
    )
} else{
    alert(
        'A velocidade do carro ' + nome1 + ' é a mesma do carro ' + nome2 + 
        '\n Ambos os carros possuem a velocidade de: ' + velocidade1
    )
}