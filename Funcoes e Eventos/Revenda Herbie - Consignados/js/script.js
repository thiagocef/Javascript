const inModeloVeiculo = document.querySelector('.inModeloVeiculo'),
      inAnoFabricacao = document.querySelector('.inAnoFabricacao'),
      inPrecoProprietario = document.querySelector('.inPrecoProprietario'),
      outClassificacao = document.querySelector('.outClassificacao'),
      outPrecoVenda = document.querySelector('.outPrecoVenda')
      
function calcularPreco() {
      
    //modelo do veículo
    const modelo = inModeloVeiculo.value

    //data atual
    const hoje = new Date(),
          anoAtual = hoje.getFullYear() //ano atual
    
    //ano do veículo
    const anoFabricacao = inAnoFabricacao.value,
          partesAno = anoFabricacao.split("-"), //ano dividido em partes
          anoModelo = Number(partesAno[0]) 

    //preço pedido pelo proprietário
    const precoProprietario = Number(inPrecoProprietario.value)

    let venda = 0

    if(anoModelo === anoAtual) {
        outClassificacao.innerHTML = `Classificação: ${modelo} - Novo`

        venda = (precoProprietario * 0.80) + precoProprietario
        outPrecoVenda.innerHTML = `Preço de Venda R$: ${venda.toFixed(2)}`

        return venda
    
    } else if(anoModelo < anoAtual - 2) {
        outClassificacao.innerHTML = `Classificação: ${modelo} - Usado`

        venda = (precoProprietario * 0.10) + precoProprietario
        outPrecoVenda.innerHTML = `Preço de Venda R$: ${venda.toFixed(2)}`

        return venda

    } else {
        outClassificacao.innerHTML = `Classificação: ${modelo} - Seminovo`

        venda = (precoProprietario * 0.10) + precoProprietario
        outPrecoVenda.innerHTML = `Preço de Venda R$: ${venda.toFixed(2)}`

        return venda
    }
}

document.querySelector('.btnCalcular').addEventListener('click', calcularPreco)
