function calcular() {
    var inValor = document.getElementById("inValor")
    var inTempo = document.getElementById("inTempo")
    var outPagar = document.getElementById("outPagar")

    var valor = Number(inValor.value)
    var tempo = Number(inTempo.value)

    //CALCULO
    const base = 15
    var total = Math.ceil(tempo/base) //arredonda pra cima
    var pagar = valor*total
    

    outPagar.textContent = `Valor a Pagar R$: ${pagar.toFixed(2)}`
}

    var btCalcular = document.getElementById("btCalcular")
    btCalcular.addEventListener("click", calcular)