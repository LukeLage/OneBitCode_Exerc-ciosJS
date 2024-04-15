//Variáveis que irão guardar as informações iniciais do código
let town_counter = 0 //Contador que irá subir cada vez que uma cidade for inclusiva
let towns = " " //Variável onde conterá as cidades visitadas 

let name = prompt('Digite o nome do turista')
let option = prompt('Você já visitou alguma cidade? (SIM/NAO)')

while (option == 'SIM'){
    let town_name = prompt("Digite o nome da cidade visitada: ")
    towns += ' ' +  ' - ' + town_name + '\n'
    town_counter ++ 
    option = prompt ('Você já visitou outra cidade? (SIM/NAO)')
}

alert(
    'Nome do turista: ' + name +
    '\n Quantidade de cidades visitadas: ' + town_counter + 
    '\n Cidades visitadas: ' + towns
)