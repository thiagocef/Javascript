function decrescer() {
    var inInicial = document.getElementById("inInicial")
    var inFinal = document.getElementById("inFinal")
    var outResposta = document.getElementById("outResposta")

    var inicial = Number(inInicial.value)
    var final = Number(inFinal.value)
    var resposta = ""
                           
    for (var i = inicial; i >= final; i--) {

        if(i % 2 == 0) { //verificando os pares
        resposta += `${i}, `
    }

    outResposta.textContent = `Os pares entre ${inicial} e ${final} são: ${resposta}`
    
  }  
}
    var btDecrescer = document.getElementById("btDecrescer")
    btDecrescer.addEventListener("click", decrescer)