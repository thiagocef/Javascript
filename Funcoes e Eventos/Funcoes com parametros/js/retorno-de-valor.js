function obterSituacao(nota, media) {
    //if ternário
    let situacao = (nota >= media) ? 'Aprovado' : 'Reprovado'

    return situacao
}

//variável recebe o retorno da função
let resposta = obterSituacao(9,7)
console.log(resposta)