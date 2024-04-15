//Variável que irá conter a opção do menu
let option

//Função que irá fazer o menu interativo aparecer
do {
    option = prompt(
    'Digite a operação desejada: ' +
    '\n 1 - Agendar consulta' + 
    '\n 2 - Verificar consulta' +
    '\n 3 - Ver médicos disponíveis' + 
    '\n 4 - Contatos' +
    '\n 5 - Encerrar'
)

    switch (parseInt(option)){
        case 1:
            alert('Você selecionou: "Agendar consulta"!')
            break
        case 2: 
            alert('Você selecionou: "Verificar consulta"!')
            break
        case 3:
            alert('Você selecionou: "Ver médicos disponíveis"!')
            break
        case 4:
            alert('Você selecionou: "Contatos"!')
            break
    }
} while (option != 5)

alert('O programa está sendo encerrado!')
