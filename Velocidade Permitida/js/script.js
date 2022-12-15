function exibirMulta() {
    var inPermitida = document.getElementById("inPermitida")
    var inCondutor = document.getElementById("inCondutor")
    var outResultado = document.getElementById("outResultado")

    var permitida = Number(inPermitida.value)
    var condutor = Number(inCondutor.value)

    //verificando se os campos firam preenchidos corretamente
    if((permitida == "" || isNaN(permitida)) || (condutor == "" || isNaN(condutor))) {
        alert(`Valor Inválido!`)
        inPermitida.focus()
        return
    }

    //calculando a velocidade
    if(condutor <= permitida) {
        outResultado.textContent = `Sem Multa`
        outResultado.style.color = 'green'
    } else if (condutor > ((permitida*0.20) + permitida)) {
        outResultado.textContent = `Multa Grave`
        outResultado.style.color = 'red'
    } else {
        outResultado.textContent = `Multa Leve`
        outResultado.style.color = 'orange'
    }


}
    var btExibir = document.getElementById("btExibir")
    btExibir.addEventListener("click", exibirMulta)