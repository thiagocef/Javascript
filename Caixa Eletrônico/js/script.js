function caixaEletronico() {
    var inValor = document.getElementById("inValor")
    var outCem = document.getElementById("outCem")
    var outCinquenta = document.getElementById("outCinquenta")
    var outDez = document.getElementById("outDez")

    var valor = Number(inValor.value)

    //condição para validar o valor recebido
    //não aceita nulo/vazio ou não numérico
    if (valor == "" || isNaN(valor)) {
        alert(`Preencha o campo corretamente!!!`)
        inValor.focus()
        return
    }

    var cem = Math.floor(valor/100)
    var cinquenta = Math.floor((valor - (cem * 100) ) / 50)
    var dez = (valor - ((cem * 100)+ (cinquenta * 50))) / 10

    //condição para não aceitar valores unitários
    
    if (dez > Math.floor(dez)) {
        //se o resultado for um valor fracionado (ex: 1.3)
        alert(`Este valor não pode ser sacado!`)
        inValor.focus()
        return
    }

    outCem.textContent = `Notas de R$ 100: ${cem}`
    outCinquenta.textContent = `Notas de R$ 50: ${cinquenta}`
    outDez.textContent = `Notas de R$ 10: ${dez}`

}
    var btExibir = document.getElementById("btExibir")
    btExibir.addEventListener("click", caixaEletronico)