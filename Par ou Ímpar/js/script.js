function parImpar() {
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value)

    if(numero == "" || isNaN(numero)) {
        alert(`[[ERRO]]`)
        inNumero.focus()
        return
    }

    if(numero % 2 == 0) {
        outResposta.textContent = `${numero} é Par`
        outResposta.style.backgroundColor = 'skyblue'
        outResposta.style.color = 'white'
    } else {
        outResposta.textContent = `${numero} é Ímpar`
        outResposta.style.backgroundColor = 'tomato'
        outResposta.style.color = 'white'
    }

}
    var btVerificar = document.getElementById("btVerificar")
    btVerificar.addEventListener("click", parImpar)