function promocao() {
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outTotal = document.getElementById("outTotal")
    var outDesconto = document.getElementById("outDesconto")
    var outPromocao = document.getElementById("outPromocao")

    var produto = inProduto.value
    var preco = Number(inPreco.value)
    var total = (preco*3) - (preco/2)
    //CALCULO
    

    outTotal.textContent = `Valor unitário: R$${preco.toFixed(2)}`
    outDesconto.textContent = `Comprando 3 ${produto}, ganhe um desconto de 50% em uma unidade: R$${(preco/2).toFixed(2)}`
    outPromocao.textContent = `Total: R$${total.toFixed(2)}`

}
    var btCalcular = document.getElementById("btCalcular")
    btCalcular.addEventListener("click", promocao)