//Variável que contém a medida a ser convertida
let meters = parseInt(prompt('Digite o valor da medida em metros'))

//Variável que contém o valor de medida que será feito a conversão
let converter = parseInt(prompt( 
    'Digite o número do valor de medida ao qual deseja converter a medida dada: ' +
    '\n 1 - milímetro (mm)' +
    '\n 2 - centímetro (cm)' + 
    '\n 3 - decímetro (dm)' +
    '\n 4 - decâmetro (dam)' +
    '\n 5 -hectômetro (hm)' +
    '\n 6 -quilômetro (km)'
))

switch(converter){
    case 1: 
        alert('A conversão de ' + meters + ' em milímetros é de: ' + meters * 1000)
        break
    case 2:
        alert('A conversão de ' + meters + ' em centímetros é de: ' + meters * 100)
        break
    case 3:
        alert('A conversão de ' + meters + ' em decímetros é de: ' + meters * 10)
        break
    case 4:
        alert('A conversão de ' + meters + ' em decâmetros é de: ' + meters / 10)
        break
    case 5:
        alert('A conversão de ' + meters + ' em hectômetro é de: ' + meters / 100)
        break
    case 6:
        alert('A conversão de ' + meters + ' em quilômetro é de: ' + meters / 1000)
        break
    default:
        alert('Opção inválida')
}