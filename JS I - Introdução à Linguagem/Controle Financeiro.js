//Variável que irá conter o dinheiro inicial e o que fará as operações
let money = parseFloat(prompt('Digite quanto você possuí em sua conta bancária: '))
let operation

//Variável que irá conter a opção do menu
let option

//Função que irá adicionar ou retirar dinheiro na conta

do{
    option = parseInt(prompt(
        "Digite a opção que deseja: " +
        "\n 1 - Adicionar dinheiro á conta" +
        "\n 2 - Retirar dinheiro da conta" + 
        "\n 3 - Sair do menu"
    ))

    switch(option){
        case 1:
            operation = parseFloat(prompt("Digite quanto você deseja adicionar à conta"))
            money += operation
            alert(
                "Atualmente você possuí: " +
                "\n R$ " + money)
            break
        case 2: 
            operation = parseFloat(prompt('Digite quanto deseja retirar da conta: '))
            money -= operation
            alert(
                "Atualmente você possuí" +
                "\n R$ " + money
            )
            break
    }
} while (option != 3)

alert(
    "O programa está sendo encerrado!"
)