function tabuada() {
    var inNumero = document.getElementById("inNumero")
    var outResultado = document.getElementById("outResultado")

    var numero = Number(inNumero.value)
    var resposta = ""

    for (var i = 1; i <= 10; i++) {
        resposta += `${numero} X ${i} = ${numero*i}...`
    }

    outResultado.textContent = `${resposta}`
}
    var btMostrar = document.getElementById("btMostrar")
    btMostrar.addEventListener("click", tabuada)
