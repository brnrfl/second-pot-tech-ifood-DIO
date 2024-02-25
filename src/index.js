let countWins
let countLosses

do {
    countWins = prompt("Digite quantas vítorias você teve:")
    countWins = parseInt(countWins)
} while (isNaN(countWins))

do {
    countLosses = prompt("Digite quantas derrotas você teve:")
    countLosses = parseInt(countLosses)
} while (isNaN(countLosses))

function calculateWins(wins, losses){
    return wins - losses
}

let saldoVitorias = calculateWins(countWins, countLosses)

function calculatePlayersLevel(totalWins){
    if (totalWins <= 10){
        return "Ferro"
    } else if (10 < totalWins && totalWins <= 20){
        return "Bronze"
    } else if (20 < totalWins && totalWins <= 50){
        return "Prata"
    } else if (50 < totalWins && totalWins <= 80){
        return "Ouro"
    } else if (80 < totalWins && totalWins <= 90){
        return "Diamante"
    } else if (90 < totalWins && totalWins <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}

let nivel = calculatePlayersLevel(saldoVitorias)

alert(`O Herói tem saldo de ${saldoVitorias} vitórias está no nível de ${nivel}`)