//função com dois parâmetros
function exibirSituacao(nota, media) {
    if(nota >= media) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
//receba a nota da prova
const prova = Number(prompt("Digite a nota: "))

//chama a função e passa os dois argumentos
//prova -> nota
//7 -> media
exibirSituacao(prova, 7)