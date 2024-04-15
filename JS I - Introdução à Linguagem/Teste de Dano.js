//Variáveis do primeiro personagem
let name1 = prompt('Digite o nome do primeiro personagem: ');
let attack_power = parseInt(prompt('Digite o poder de ataque do primeiro personagem: '));

//Variáveis do segundo personagem
let name2 = prompt('Digite o nome do segundo personagem: ');
let defense_power = parseInt(prompt('Digite o poder de defesa do segundo personagem: '));
let shield = prompt('O segundo personagem tem escuto? (SIM/NAO) ');

//Variáveis de cálculo de dano
no_shield = attack_power - defense_power;
with_shield = (attack_power - defense_power) / 2;

//Função que irá calcular a quantidade de dano causado
if (attack_power > defense_power){
    if (shield.toUpperCase() == 'SIM') {
        alert('O dano dado por ' + name1 + ' à ' + name2 + ' foi de: ' + with_shield)
    } else {
        alert('O dano dado por ' + name1 + ' à ' + name2 + 'foi de: ' + no_shield)
    }}else{
        alert('O poder de ' + name1 + ' não conseguiu atingir ' + name2)
    }