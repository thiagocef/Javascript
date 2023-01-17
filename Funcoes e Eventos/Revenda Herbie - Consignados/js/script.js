const inModeloVeiculo = document.querySelector('.inModeloVeiculo'),
      inAnoFabricacao = document.querySelector('.inAnoFabricacao'),
      inPrecoProprietario = document.querySelector('.inPrecoProprietario'),
      outClassificacao = document.querySelector('.outClassificacao'),
      outPrecoVenda = document.querySelector('.outPrecoVenda')
      
function mostrarDados() { 
    const modelo = inModeloVeiculo.value,
          ano = Number(inAnoFabricacao.value),
          preco = Number(inPrecoProprietario.value)

    //após o preenchimento dos campos, as seguintes funções são chamadas:
    //o retorno de cada função é atribuído às variáveis
    const classificacao = classificarVeiculo(ano), //passando "ano(ano)" como parâmetro
          precoVenda = calcularVenda(preco, classificacao) //passando "preco(valor)" e "classificacao(status)" como parâmetros

    //exibe as respostas
    outClassificacao.innerHTML = `Classificação: ${modelo} - ${classificacao}`

    outPrecoVenda.innerHTML = `Preço de Venda R$: ${precoVenda.toFixed(2)}`
}
document.querySelector('.btnCalcular').addEventListener('click', mostrarDados)

//recebe o ano como parâmetro
function classificarVeiculo(ano) {
    const anoAtual = new Date().getFullYear() //obtem o ano atual
    let classif

    if (ano === anoAtual) {
        classif = `Novo`
    } else if (ano === anoAtual -1 || ano === anoAtual -2) {
        classif = `Seminovo`
    } else {
        classif = `Usado`
    }

    return classif //o return será enviado para a função principal
                   //onde foi atriuído à variável "classificacao"
}

//recebe o valor e o status como parâmetros
function calcularVenda(valor, status) {
    //if ternário
    let prVenda = (status === `Novo`) ? valor * 1.08 : valor * 1.10

    return prVenda
}