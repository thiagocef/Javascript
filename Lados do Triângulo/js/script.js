function verificarTriangulo() {
    var inLadoA = document.getElementById("inLadoA")
    var inLadoB = document.getElementById("inLadoB")
    var inLadoC = document.getElementById("inLadoC")
    var outResultado = document.getElementById("outResultado")
    var outTipo = document.getElementById("outTipo")
    
    
    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)

    //verificando se os campos foram preenchidos corretamente
    if(ladoA == "" || (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC))) {
        alert(`[ ERRO ] - Preencha os campos corretamente!`)
        inLadoA.focus()
        return
    } else if (ladoB == "" || ladoC == "") {
        alert(`[ ERRO ] - Preencha os campos corretamente!`)
        inLadoA.focus()
        return
    }

    //verificando se os lados formam um triângulo
    if ((ladoA > (ladoB + ladoC)) || ((ladoB > (ladoA + ladoC)))) {
        outResultado.textContent = `Lados não formam um triângulo`
        outTipo.textContent = ""
        return

    } else if (ladoC > (ladoA + ladoB)) {
        outResultado.textContent = `Lados não formam um triângulo`
        outTipo.textContent = ""
        return
    }

    //verificando o tipo de triângulo
    if ((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)) {
        outResultado.textContent = "Lados podem formar um triângulo"
        outTipo.textContent = "Tipo: Equilátero"

    } else if ((ladoA != ladoB) && (ladoA != ladoC) && (ladoB != ladoC)) {
        outResultado.textContent = "Lados podem formar um triângulo"
        outTipo.textContent = "Tipo: Escaleno"  

    } else {
        outResultado.textContent = "Lados podem formar um triângulo"
        outTipo.textContent = "Tipo: Isósceles"        
    }
}
    var btVerificar = document.getElementById("btVerificar")
    btVerificar.addEventListener("click", verificarTriangulo)
    