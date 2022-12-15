function parquimetro() {
    var inValor = document.getElementById("inValor")
    var outTempo = document.getElementById("outTempo")
    var outTroco = document.getElementById("outTroco")

    var valor = Number(inValor.value)
    
    //-----------------------------------------------------------
    //verificando se o campo foi preenchido corretamente
    if (valor == "" || isNaN(valor)) {
        alert(`[ E R R O ]`)
        inValor.focus()
        return
    }
    //-----------------------------------------------------------
    //verificando se o valor é suficiente
    if (valor < 1) {
        alert (`[[ Valor Insuficiente ]]\nValor mínimo: R$1,00`)
        inValor.focus()
        return
    } 
    //-----------------------------------------------------------
    //calculando o tempo e o troco
    var troco = 0

    if ((valor >= 1) && (valor < 1.75)) {
        troco = valor - 1
        outTempo.textContent = `Tempo: 30 min`
        outTroco.textContent = `Troco: ${troco.toFixed(2)}`

    } else if ((valor >= 1.75) && (valor < 3)) {
        troco = valor - 1.75
        outTempo.textContent = `Tempo: 60 min`
        outTroco.textContent = `Troco: ${troco.toFixed(2)}`
    } else {
        troco = valor - 3
        outTempo.textContent = `Tempo: 120 min`
        outTroco.textContent = `Troco: ${troco.toFixed(2)}`
    }
}
    var btConfirmar = document.getElementById("btConfirmar")
    btConfirmar.addEventListener("click", parquimetro)