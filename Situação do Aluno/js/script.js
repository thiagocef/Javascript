function situacao() {
    var inNome = document.getElementById("inNome")
    var inNota1 = document.getElementById("inNota1")
    var inNota2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia")
    var outSituacao = document.getElementById("outSituacao")

    var nome = inNome.value
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)
    
    var media = (nota1+nota2) / 2

    
    if (media >= 7) {
        outMedia.textContent = `Média: ${media}`
        outSituacao.textContent = `${nome}, Você foi aprovado!`
        outSituacao.style.color = "green"
    
    } else if (media < 4) {
        outMedia.textContent = `Média: ${media}`
        outSituacao.textContent = `${nome}, Você foi reprovado!`
        outSituacao.style.color = "red"
    } else {
        outMedia.textContent = `Média: ${media}`
        outSituacao.textContent = `${nome}, Você foi para recuperação!`
        outSituacao.style.color = "orange"
    }

}
    var btExibir = document.getElementById("btExibir")
    btExibir.addEventListener("click", situacao)