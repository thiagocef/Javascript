function exibirRaiz() {
    var inNumero = document.getElementById("inNumero")
    var outResultado = document.getElementById("outResultado")

    var numero = Number(inNumero.value) 
 

    //verificar se o campo foi preenchido corretamente
    if(numero == "" || isNaN(numero)) {
        alert(`Preencha o campo corretamente!!`)
        inNumero.focus()
        return
    }

    //calculando a raiz quadrada 
    var raiz  = Math.sqrt(numero)

    if (raiz == Math.floor(raiz)) {
        outResultado.textContent = `A raíz de ${numero} é ${raiz}`
    } else {
        outResultado.textContent = `Não há raíz exata para ${numero}`
       
    }
}
    var btExibir = document.getElementById("btExibir")
    btExibir.addEventListener("click", exibirRaiz)