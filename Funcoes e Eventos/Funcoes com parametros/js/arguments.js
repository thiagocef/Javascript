function calcularMedia() {
    if(arguments.length == 0) { //se não foram passados nenhum argumento
        console.log("Informe, no mímino, uma nota!")
    }

    let soma = 0, //acumular a soma das notas
        numNotas = arguments.length //quantidade de argumentos
    
    //percorrendo os argumentos
    for(let i = 0; i < numNotas; i ++) {
        soma += arguments[i] //soma o valor dos argumentos

        console.log(`Nota ${i}: ${arguments[i]}`) //mostra cada nota
    }

    //calculo da média
    let media = soma / numNotas
    console.log(`Número de notas: ${numNotas}`)
    console.log(`Soma das Notas: ${soma}`)
    console.log(`Média  das notas: ${media.toFixed(1)}`)
}

//chamando a função com numeros diferentes de argumentos
calcularMedia()
console.log("-------------------")
calcularMedia(3, 6, 2, 3, 6)
console.log("-------------------")
calcularMedia(3, 4)
console.log("-------------------")
calcularMedia(8, 5, 9, 2)