// Definição das variáveis globais para armazenar as contagens de vitórias e derrotas
let countWins
let countLosses

// Função para obter a entrada do usuário e garantir que seja um número inteiro válido
function getEntranceInteger(entranceMessage){
    let entrance
    let verifyNumEntrance
    // Loop para garantir que a entrada seja um número inteiro válido e não contenha vírgula ou ponto
    do {
        entrance = prompt(entranceMessage) // Obtém a entrada do usuário
        verifyNumEntrance = parseInt(entrance) // Tenta converter a entrada em um número inteiro
    // Continua o loop se a entrada não for um número inteiro válido ou contiver vírgula ou ponto
    } while (isNaN(verifyNumEntrance) || entrance.includes(",") || entrance.includes(".")) 
    return verifyNumEntrance// Retorna o número inteiro convertido
}

// Obtém a quantidade de vitórias e derrotas do jogador usando a função getEntranceInteger
countWins = getEntranceInteger("Digite quantas vítorias você teve:")
countLosses = getEntranceInteger("Digite quantas derrotas você teve:")

// Função para calcular o saldo de vitórias (vitórias - derrotas)
function calculateWins(wins, losses){
    return wins - losses
}

// Calcula o saldo de vitórias usando a função calculateWins
let saldoVitorias = calculateWins(countWins, countLosses)

// Função para determinar o nível do jogador com base no saldo de vitórias
function calculatePlayersLevel(totalWins){
    if (totalWins <= 10){
        return "Ferro"
    } else if (totalWins <= 20){
        return "Bronze"
    } else if (totalWins <= 50){
        return "Prata"
    } else if (totalWins <= 80){
        return "Ouro"
    } else if (totalWins <= 90){
        return "Diamante"
    } else if (totalWins <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}

// Determina o nível do jogador usando a função calculatePlayersLevel
let nivel = calculatePlayersLevel(saldoVitorias)

// Exibe uma mensagem com o saldo de vitórias e o nível do jogador
alert(`O Herói tem saldo de ${saldoVitorias} vitórias está no nível ${nivel}`)